
import React from 'react';
import { gerenciaContent, sistemasGerencia } from './data';

const GerenciaPage = ({ paginaAtual }) => {
    const content = gerenciaContent[paginaAtual];
    if (!content) return null;

    return (
        <section className="gerencia-section">
            <h1 className="section-title">{content.title}</h1>
            <section className="card-section">
                <h3>Missão</h3>
                <p>{content.mission}</p>
            </section>
            <section className="card-section">
                <h3>Visão</h3>
                <p>{content.vision}</p>
            </section>
            <section className="card-section">
                <h3>Valores</h3>
                <div className="cards-grid">
                    {content.values.map((valor, index) => (
                        <div className="card valor-card" key={index}>
                            <h4>{valor}</h4>
                        </div>
                    ))}
                </div>
            </section>
            {/* Portfólio de Sistemas */}
            <section className="card-section">
                <h3>Portfólio de Sistemas</h3>
                <div className="cards-grid">
                    {sistemasGerencia[paginaAtual]?.map((sistema, index) => (
                        <div key={index} className="card">
                            <h4>{sistema.nome}</h4>
                            <p>{sistema.descricao}</p>
                            <a href={sistema.link} target="_blank" rel="noopener noreferrer">
                                Acessar Sistema
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default GerenciaPage;