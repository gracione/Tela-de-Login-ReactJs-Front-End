import React, { useState } from 'react';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { RiCalendarLine, RiCalendarTodoLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Menu() {
    const history = useNavigate();
    function handleLogout() {
        localStorage.clear();
        history('/');
    }

    const [classOn, setClassOn] = useState(false);
    return (
        <header>
            <div className="container">
                <img className="logo-cyan" src="logo_alternativa.svg" alt="logo Cyan" />

                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <a href="#">
                                    <div className='item-menu-movel' >
                                        FUNCIONARIOS
                                    </div>
                                    <FiUsers className='item-menu-desktop' />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='item-menu-movel' >
                                        FERIADOS
                                    </div>
                                    <RiCalendarLine className='item-menu-desktop' />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='item-menu-movel' >
                                        FOLGA
                                    </div>
                                    <RiCalendarTodoLine className='item-menu-desktop' />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='item-menu-movel' >
                                        CONTATO
                                    </div>
                                    <RiCalendarLine className='item-menu-desktop' />
                                </a>
                            </li>
                            <li>
                                <a onClick={handleLogout} href="/">
                                    <div className='item-menu-movel' >
                                        SAIR
                                    </div>
                                    <FiLogOut className='item-menu-desktop' />
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>

    )
}