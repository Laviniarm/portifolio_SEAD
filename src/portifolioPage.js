// PortfolioPage.js
import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ComunicadosPage from './ComunicadosPage';
import GerenciaPage from './GerenciaPage';
import Footer from './Footer';
import { paginas } from './data';

const PortfolioPage = () => {
    const [paginaAtual, setPaginaAtual] = useState("Home");

    // Verifica se é uma página de gerência com base na chave de gerenciaContent
    const isGerencia = Object.keys(require('./data').gerenciaContent).includes(paginaAtual);

    return (
        <div className="container">
            <Header paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
            <main className="main-content">
                {paginaAtual === "Home" && <HomePage />}
                {paginaAtual === "Comunicados" && <ComunicadosPage />}
                {isGerencia && <GerenciaPage paginaAtual={paginaAtual} />}
                {/* Outras páginas podem ser adicionadas aqui */}
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioPage;