import React, { useState } from 'react';
import { paginas } from './data';

const gerencias = [
    "GOGPD",
    "GEPRON",
    "GESED",
    "GEGOD",
    "GOCAP",
    "GECID"
];

const Header = ({ paginaAtual, setPaginaAtual }) => {
    const [showDropdown, setShowDropdown] = useState(false);

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

                    {/* Item Gerências com Dropdown */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <span className={gerencias.includes(paginaAtual) ? "active" : ""}>Gerências</span>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                {gerencias.map(gerencia => (
                                    <li
                                        key={gerencia}
                                        onClick={() => {
                                            setPaginaAtual(gerencia);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {gerencia}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;