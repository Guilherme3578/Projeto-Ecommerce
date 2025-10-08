import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Header from '../Header';
import api from '../../api';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', senha: '' });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    api.get('/users', { params: { email: credentials.email, senha: credentials.senha } })
      .then((res) => {
        const users = res.data;
        if (users && users.length > 0) {
          alert('Login bem-sucedido!');
          navigate('/');
        } else {
          alert('Credenciais inválidas');
        }
      })
      .catch((err) => {
        console.error('Erro no login:', err);
        alert('Erro ao conectar com a API');
      })
      .finally(() => setSubmitting(false));
  };

  return (
    
    <div>
      <Header />
      <div className="login-container">
      <div className="left-image">
        <img src="/menina.png" alt="Pessoa apontando" />
      </div>
      <div className="form-container">
        <h2>Entrar na sua conta</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="E-mail" value={credentials.email} onChange={handleChange} />
          <input type="password" name="senha" placeholder="Senha" value={credentials.senha} onChange={handleChange} />
          <button type="submit" disabled={submitting}>{submitting ? 'Entrando...' : 'Entrar'}</button>
        </form>
      </div>
    </div>
    </div>
  );
}
