// Header.js
import React from 'react';
import { FaBars } from "react-icons/fa";
import { paginas } from './data'; // Importa a lista de páginas

const Header = ({ paginaAtual, setPaginaAtual }) => {
    return (
        <header className="site-header">
            <img src="/DIGITAL.png" alt="Logo Institucional" className="logo" />
            <nav className="main-nav">
                <ul>
                    {paginas.map(pagina => (
                        <li
                            key={pagina}
                            className={paginaAtual === pagina ? "active" : ""}
                            onClick={() => setPaginaAtual(pagina)}
                        >
                            {pagina}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;