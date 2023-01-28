import { useState } from 'react';

const useSignIn = () => {
  // Etat
  const [errorAuthentication, setErrorAuthentication] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  // Interaction

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
    try {
      const request = await fetch('/api/user_api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });
      const response = await request.json();
      if (response.code === 401) {
        throw new Error(response.message);
      }
      setErrorEmail('');
      setErrorAuthentication('');
    } catch (error) {
      setErrorAuthentication(error.message);
    }
  };

  const checkEmail = (value) => {
    const regex =
      /^[a-zA-Z]+([\.\_\-]?[a-zA-z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    return regex.test(value);
  };

  return [errorAuthentication, errorEmail, handleSubmit];
};

export default useSignIn;
