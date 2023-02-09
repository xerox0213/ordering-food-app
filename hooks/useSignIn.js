import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

const useSignIn = () => {
  // Etat
  const [errorAuthentication, setErrorAuthentication] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const authenticationData = useRef();

  useEffect(() => {
    if (loading) {
      const postData = async () => {
        try {
          locked = true;
          const request = await fetch('/api/user_api/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          });
          const response = await request.json();
          if (response.code === 401) {
            throw new Error(response.message);
          }
          setErrorEmail('');
          setErrorAuthentication('');
          dispatch({ type: 'info/addMessage', payload: 'Connecté ✔️' });
          push('/menu');
        } catch (error) {
          locked = false;
          setErrorAuthentication(error.message);
          setLoading(false);
        }
      };
      postData();
    } else {
      return;
    }
  }, [loading]);

  // Interaction
  let locked = false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const childrenOfForm = [...form.children];
    const [inputGroupEmail, inputGroupPassword] = childrenOfForm;
    const email = inputGroupEmail.children[1];
    const password = inputGroupPassword.children[1];
    if (!checkEmail(email.value)) {
      setErrorEmail(true);
      return;
    }
    setErrorEmail(false);
    authenticationData.current = { email, password };
    if (!locked) {
      setLoading(true);
    } else {
      return;
    }
  };

  const checkEmail = (value) => {
    const regex =
      /^[a-zA-Z]+([\.\_\-]?[a-zA-z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    return regex.test(value);
  };

  return [errorAuthentication, errorEmail, handleSubmit, loading];
};

export default useSignIn;
