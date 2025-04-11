
import React from 'react';
import { gerenciaContent, sistemasGerencia } from './data';

const GerenciaPage = ({ paginaAtual }) => {
    const content = gerenciaContent[paginaAtual];
    if (!content) return null;

    return (
        <section className="gerencia-section">
            <h1 className="section-title-gerencia">{content.title}</h1>

            <section className="card-section-gerencia">
                <h3>Objetivo</h3>
                <p className="objetivo">{content.mission}</p>
            </section>

            <section className="card-section-gerencia">
                <h3>Diretrizes de Atuação</h3>
                <div className="cards-grid-gerencia">
                    {content.values.map((valor, index) => {
                        const [titulo, ...descricaoArray] = valor.split(':');
                        const descricao = descricaoArray.join(':').trim();

                        return (
                            <div className="card-gerencia" key={index}>
                                <h4 className="card-titulo">{titulo}</h4>
                                <p className="card-descricao">{descricao}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="card-section-gerencia">
                <h3>Portfólio de Sistemas</h3>
                <div className="cards-grid-gerencia">
                    {sistemasGerencia[paginaAtual]?.map((sistema, index) => (
                        <div key={index} className="card-gerencia">
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
