import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

function Login() {
  const [nameLogin, setNameLogin] = useState('');
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setNameLogin(value);
  };

  const handleLoading = async () => {
    setLoad(true);
    await createUser({ name: nameLogin });
    setLoad(false);
    navigate('/search');
  };

  if (load) return <p>Carregando...</p>;

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          data-testid="login-name-input"
          value={ nameLogin }
          onChange={ handleSubmit }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-button"
        onClick={ handleLoading }
        disabled={ nameLogin.length < 3 }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
