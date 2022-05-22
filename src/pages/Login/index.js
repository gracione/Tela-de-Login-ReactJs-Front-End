import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.data.token);
      history('/lists');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <center>
          <img src='logo.svg' />
        </center>
        <form onSubmit={handleLogin}>
          <input
            name='email'
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name='password'
            placeholder="Sua Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#3498db" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}