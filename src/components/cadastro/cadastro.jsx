import React, { useState } from 'react';
import './cadastro.css'; 

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    emailConfirm: '',
    senha: '',
    senhaConfirm: ''
  });
 
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    
  };

  return (
    <div className="cadastro-container">
      <div className="left-image">
        <img src="/menina.png" alt="Pessoa apontando" />
      </div>
      <div className="form-container">
        <h2>Crie sua conta</h2>
        <p>ou Faça login na sua conta</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} />
          <input type="text" name="sobrenome" placeholder="Digite seu sobrenome" value={formData.sobrenome} onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
          <input type="email" name="emailConfirm" placeholder="Confirme seu e-mail" value={formData.emailConfirm} onChange={handleChange} />
          <input type="password" name="senha" placeholder="Digite sua senha" value={formData.senha} onChange={handleChange} />
          <input type="password" name="senhaConfirm" placeholder="Confirme sua senha" value={formData.senhaConfirm} onChange={handleChange} />
          <button type="submit">Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
