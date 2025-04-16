import React, { useState } from 'react';
import { gerenciaContent, sistemasGerencia } from './data';
import { FaEye, FaCheckCircle, FaUsers, FaLock, FaSync, FaLeaf } from 'react-icons/fa';
import { MdOutlineAccessibilityNew } from 'react-icons/md';

const iconesValores = {
    "Transparência": <FaEye />,
    "Foco no cidadão": <FaUsers />,
    "Acessibilidade": <MdOutlineAccessibilityNew />,
    "Ética": <FaLock />,
    "Modernização": <FaSync />,
    "Sustentabilidade": <FaLeaf />,
    "Colaboração": <FaUsers />,
    "Inovação": <FaSync />,
    "Eficiência": <FaCheckCircle />,
    "Cidadania Digital": <FaUsers />,
    "Participação cidadã": <FaUsers />,
    "Responsabilidade": <FaCheckCircle />,
    "Inclusão": <MdOutlineAccessibilityNew />,
    "Excelência": <FaCheckCircle />,
    "Desburocratização": <FaSync />,
    "Simplificação": <FaSync />,
};

const GerenciaPage = ({ paginaAtual }) => {
    const content = gerenciaContent[paginaAtual];
    if (!content) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="gerencia-section">
            <h1 className="section-title-gerencia">{content.title}</h1>

            {/* Objetivo com destaque visual */}
            <section className="card-section-gerencia">
                <h3>Objetivo</h3>
                <div className="objetivo destaque-com-borda">
                    <p>{content.mission}</p>
                </div>
            </section>

            {/* Diretrizes com cards interativos, ícones e toggle */}
            <section className="card-section-gerencia">
                <h3>Diretrizes de Atuação</h3>
                <div className="cards-grid-gerencia">
                    {content.values.map((valor, index) => {
                        const [titulo, ...descricaoArray] = valor.split(':');
                        const descricao = descricaoArray.join(':').trim();
                        const isOpen = expandedIndex === index;
                        const icone = iconesValores[titulo.trim()] || <FaCheckCircle />;

                        return (
                            <div
                                className={`card-gerencia card-interativo ${isOpen ? 'ativo' : ''}`}
                                key={index}
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="card-icone">{icone}</div>
                                <h4 className="card-titulo">{titulo}</h4>
                                {isOpen && <p className="card-descricao animated-fade-in">{descricao}</p>}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Portfólio de Sistemas */}
            <section className="card-section-gerencia">
                <h3>Portfólio de Sistemas</h3>
                <div className="cards-grid-gerencia">
                    {sistemasGerencia[paginaAtual]?.map((sistema, index) => (
                        <div key={index} className="card-gerencia sistema-card">
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