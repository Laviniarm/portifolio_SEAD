import React, { useState } from "react";
import "./styles.css";

const paginas = [
    "Home", "Gerência 1", "Gerência 2", "Gerência 3",
    "Gerência 4", "Gerência 5", "Gerência 6"
];

const sistemasGerencia = {
    "Gerência 1": [
        { nome: "Sistema A", descricao: "Gestão de documentos", link: "https://exemplo.com/sistemaA" },
        { nome: "Sistema B", descricao: "Tramitação de processos", link: "https://exemplo.com/sistemaB" }
    ],
    "Gerência 2": [
        { nome: "Sistema C", descricao: "Análise de dados", link: "https://exemplo.com/sistemaC" },
        { nome: "Sistema D", descricao: "Gestão de processos", link: "https://exemplo.com/sistemaD" }
    ],
};

const PortfolioPage = () => {
    const [paginaAtual, setPaginaAtual] = useState("Home");

    return (
        <div className="container">
            {/* Barra Lateral */}
            <aside className="sidebar">
                <h2>Navegação</h2>
                <ul>
                    {paginas.map((pagina) => (
                        <li
                            key={pagina}
                            className={paginaAtual === pagina ? "active" : ""}
                            onClick={() => setPaginaAtual(pagina)}
                        >
                            {pagina}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Conteúdo Principal */}
            <div className="main-content">
                {/* Banner */}
                <div className="banner">
                    <div className="banner-overlay">
                        <h1>Transformação Digital no Setor Público</h1>
                        <p>Inovação e eficiência para melhorar os serviços ao cidadão</p>
                    </div>
                </div>

                {/* Conteúdo Dinâmico */}
                <div className="card-container">
                    {paginaAtual === "Home" ? (
                        <>
                            <div className="card">
                                <h3>Organograma</h3>
                                <p>Estrutura organizacional da secretaria</p>
                                <a href="#">Visualizar</a>
                            </div>
                            <div className="card">
                                <h3>Decreto</h3>
                                <p>Normativas e regulamentações</p>
                                <a href="#">Acessar</a>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>{paginaAtual}</h2>
                            {sistemasGerencia[paginaAtual]?.map((sistema, index) => (
                                <div key={index} className="card">
                                    <h3>{sistema.nome}</h3>
                                    <p>{sistema.descricao}</p>
                                    <a href={sistema.link} target="_blank" rel="noopener noreferrer">
                                        Acessar Sistema
                                    </a>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;