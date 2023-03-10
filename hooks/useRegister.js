import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useRegister = () => {
  const [registrationStep, setRegistrationStep] = useState(0);
  const [errorInputs, setErrorInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const registrationData = useRef({});
  const refForm = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      const postData = async () => {
        try {
          locked = true;
          addData();
          const requestCreateUserWithDb = await fetch(
            '/api/user_api/registration',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(registrationData.current),
            }
          );
          const responseAPI = await requestCreateUserWithDb.json();
          if (responseAPI.code === 401) {
            throw new Error(responseAPI.error);
          }
          refForm.current.reset();
          setRegistrationStep(registrationStep + 1);
        } catch (error) {
          locked = false;
          dispatch({
            type: 'info/addMessage',
            payload: error.message,
          });
          setLoading(false);
        }
      };
      postData();
    } else {
      return;
    }
  }, [loading]);

  // Interaction
  const addData = () => {
    const form = refForm.current;
    const divInputGroup = [...form.children];
    for (let i = 0; i < divInputGroup.length; i++) {
      const input = divInputGroup[i].children[1];
      const valueOfInput = input.value.trim();
      const typeOfInput = input.getAttribute('id');
      registrationData.current[typeOfInput] = valueOfInput;
    }
  };

  const checkInputs = () => {
    if (registrationStep === 0) {
      const form = refForm.current;
      const divInputGroup = [...form.children];
      const validityOfInputs = {};
      const newErrorInputs = [];
      divInputGroup.forEach((elem) => {
        const input = elem.children[1];
        const typeOfInput = input.getAttribute('id');
        if (typeOfInput === 'email') {
          const email = input.value;
          // Condition ?? respecter pour un email valide
          const regexEmail =
            /^[a-zA-Z]+([\.\_\-]?[a-zA-Z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
          // V??rification de l'email
          validityOfInputs.email = regexEmail.test(email);
        } else if (typeOfInput === 'password') {
          const password = input.value;
          // Conditions ?? respecter pour un mot de passe valide
          const regexMajPassword = /[A-Z]+/;
          const regexNumberPassword = /[0-9]+/;
          const lengthPassword = 8;
          // V??rifications du mot de passe
          validityOfInputs.password =
            regexMajPassword.test(password) &&
            regexNumberPassword.test(password) &&
            password.length >= lengthPassword;
        } else {
          const password = divInputGroup[1].children[1].value;
          const confirmPassword = input.value;
          // V??rification du mot de passe
          validityOfInputs.confirm_password =
            password === confirmPassword && validityOfInputs.password;
        }
      });

      // Liste tous les inputs qui ne sont pas valide
      for (const prop in validityOfInputs) {
        if (!validityOfInputs[prop]) {
          newErrorInputs.push(prop);
        } else {
          continue;
        }
      }
      // Si tableau newErrorInputs vide ??a veut dire que tout est juste
      return newErrorInputs.length === 0
        ? { validity: true }
        : { validity: false, newErrorInputs };
    } else if (registrationStep === 1) {
      const form = refForm.current;
      const divInputGroup = [...form.children];
      const validityOfInputs = {};
      const newErrorInputs = [];
      divInputGroup.forEach((elem) => {
        const input = elem.children[1];
        const typeOfInput = input.getAttribute('id');
        if (typeOfInput === 'firstname') {
          const firstname = input.value.trim();
          const regexFirstname = /^[A-Za-z]+(\s[a-zA-Z]+)*$/;
          validityOfInputs.firstname = regexFirstname.test(firstname);
        } else if (typeOfInput === 'name') {
          const name = input.value.trim();
          const regexName = /^[A-Za-z]+(\s[a-zA-Z]+)*$/;
          validityOfInputs.name = regexName.test(name);
        } else if (typeOfInput === 'address') {
          const address = input.value.trim();
          const regexAddress = /^([0-9]+(\s[a-zA-Z]+)+|([a-zA-Z]+\s)+[0-9]+)$/;
          validityOfInputs.address = regexAddress.test(address);
        } else if (typeOfInput === 'city') {
          const city = input.value.trim();
          const regexCity = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
          validityOfInputs.city = regexCity.test(city);
        } else {
          const zip = input.value.trim();
          const regexZip = /^[0-9]+$/;
          validityOfInputs.zip = regexZip.test(zip);
        }
      });

      // Liste tous les inputs qui ne sont pas valide
      for (const prop in validityOfInputs) {
        if (!validityOfInputs[prop]) {
          newErrorInputs.push(prop);
        } else {
          continue;
        }
      }
      // Si tableau newErrorInputs vide ??a veut dire que tout est juste
      return newErrorInputs.length === 0
        ? { validity: true }
        : { validity: false, newErrorInputs };
    } else {
      return true;
    }
  };

  let locked = false;

  const nextRegistrationStep = async () => {
    const validityInputs = checkInputs();
    if (validityInputs.validity) {
      if (registrationStep < 2 && registrationStep !== 1) {
        addData();
        refForm.current.reset();
        setErrorInput([]);
        setRegistrationStep(registrationStep + 1);
      } else if (registrationStep < 2 && registrationStep === 1 && !locked) {
        setErrorInput([]);
        setLoading(true);
      } else {
        return;
      }
    } else {
      setErrorInput(validityInputs.newErrorInputs);
      return;
    }
  };

  const prevRegistrationStep = () => {
    if (registrationStep > 0) {
      refForm.current.reset();
      setRegistrationStep((currentStep) => currentStep - 1);
    } else {
      return;
    }
  };

  return [
    registrationStep,
    errorInputs,
    registrationData,
    refForm,
    nextRegistrationStep,
    prevRegistrationStep,
    loading,
  ];
};

export default useRegister;
