import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Header from '../Header';
import Horarios from '../Horarios';
import Menu from '../Menu';
import './styles.css';

export default function Lists() {
  const [token] = useState(localStorage.getItem('token'));
  const [taskList, setTaskList] = useState([]);

  const history = useNavigate();
  console.log(token);
  useEffect(() => {
    api.get('me', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      if (response.data.status && response.data.status === (401 || 498)) {
        localStorage.clear();
        history('/');
      } else {
        setTaskList(response.data.data);
      }
    }).catch(err => {
      alert(err)
    })
  }, [token]);

  if(token === '' || token === null){
    history('/');
  }


  return (
    <div className='containe' >
      <Menu></Menu>
      <Header>
          <Horarios></Horarios>
      </Header>
    </div>
  );
}