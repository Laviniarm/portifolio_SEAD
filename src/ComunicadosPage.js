import React from 'react';
import { comunicados } from './data';

const ComunicadosPage = () => {
    return (
        <section className="comunicados-section">
            <h1 className="section-title">Comunicados</h1>
            <div className="cards-grid-c">
                {comunicados.map((comunicado, index) => (
                    <div key={index} className="comunicado-card">
                        <div className="header">{comunicado.title}</div>
                        <div className="body">
                            <p>{comunicado.description}</p>
                        </div>
                        <div className="footer">
                            <a href={comunicado.link} target="_blank" rel="noopener noreferrer">Saiba Mais</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ComunicadosPage;