import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cadastro.css'; 
import Header from '../Header';
import api from '../../api';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    emailConfirm: '',
    senha: '',
    senhaConfirm: ''
  });
  const [submitting, setSubmitting] = useState(false);
 
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    api.post('/users', formData)
      .then((res) => {
        console.log('Usuário criado:', res.data);
        alert('Cadastro realizado com sucesso!');
        setFormData({ nome: '', sobrenome: '', email: '', emailConfirm: '', senha: '', senhaConfirm: '' });
      })
      .catch((err) => {
        console.error('Erro ao criar usuário:', err);
        alert('Erro ao cadastrar. Tente novamente.');
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <Header />
      <div className="cadastro-container">
      <div className="left-image">
        <img src="/menina.png" alt="Pessoa apontando" />
      </div>
      <div className="form-container">
  <h2>Crie sua conta</h2>
   <p>ou <Link to="/login">faça login na sua conta</Link></p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} />
          <input type="text" name="sobrenome" placeholder="Digite seu sobrenome" value={formData.sobrenome} onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
          <input type="email" name="emailConfirm" placeholder="Confirme seu e-mail" value={formData.emailConfirm} onChange={handleChange} />
          <input type="password" name="senha" placeholder="Digite sua senha" value={formData.senha} onChange={handleChange} />
          <input type="password" name="senhaConfirm" placeholder="Confirme sua senha" value={formData.senhaConfirm} onChange={handleChange} />
          <button type="submit" disabled={submitting}>{submitting ? 'Enviando...' : 'Cadastrar'}</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Cadastro;
