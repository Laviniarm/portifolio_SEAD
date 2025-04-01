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
    "Gerência 3": [
        {
            nome: "Sistema E",
            descricao: "Sistema de controle financeiro",
            link: "https://exemplo.com/sistemaE"
        },
        {
            nome: "Sistema F",
            descricao: "Sistema de gestão de pessoas",
            link: "https://exemplo.com/sistemaF"
        }
    ],
    "Gerência 4": [
        {
            nome: "Sistema G",
            descricao: "Sistema de monitoramento de projetos",
            link: "https://exemplo.com/sistemaG"
        },
        {
            nome: "Sistema H",
            descricao: "Sistema de gestão de contratos",
            link: "https://exemplo.com/sistemaH"
        }
    ],
    "Gerência 5": [
        {
            nome: "Sistema I",
            descricao: "Sistema de análise de dados estatísticos",
            link: "https://exemplo.com/sistemaI"
        },
        {
            nome: "Sistema J",
            descricao: "Sistema de controle de orçamento",
            link: "https://exemplo.com/sistemaJ"
        }
    ],
    "Gerência 6": [
        {
            nome: "Sistema K",
            descricao: "Sistema de auditoria",
            link: "https://exemplo.com/sistemaK"
        },
        {
            nome: "Sistema L",
            descricao: "Sistema de suporte técnico",
            link: "https://exemplo.com/sistemaL"
        }
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
                <div
                    className="banner"
                    style={{
                        backgroundImage:
                            "url('https://source.unsplash.com/1600x900/?technology,digital')",
                    }}
                >
                    <div className="banner-overlay">
                        <h1>Transformação Digital no Setor Público</h1>
                        <p>
                            Inovação e eficiência para melhorar os serviços prestados ao
                            cidadão
                        </p>
                    </div>
                </div>

                {/* Conteúdo Dinâmico */}
                <div className="card-container">
                    {paginaAtual === "Home" ? (
                        <>
                            <h1 className="card-title">
                                Secretaria Executiva de Modernização e Transformação Digital
                            </h1>
                            <p className="card-text text-center">
                                A Secretaria Executiva de Modernização e Transformação Digital
                                tem como missão promover a digitalização dos serviços públicos,
                                garantindo maior eficiência, transparência e acessibilidade para a
                                população.
                            </p>
                            <p className="card-text">
                                Nosso objetivo é criar soluções inovadoras para simplificar e
                                modernizar processos administrativos, melhorando a experiência
                                do cidadão e fortalecendo a gestão pública digital.
                            </p>

                            {/* Seções com links */}
                            <div className="card-grid">
                                <div className="card">
                                    <h3>Organograma</h3>
                                    <p>Estrutura organizacional da secretaria</p>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visualizar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>Decreto</h3>
                                    <p>Normativas e regulamentações</p>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Acessar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>PLO</h3>
                                    <p>Plano de Logística Organizacional</p>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Consultar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>ABEPTIC</h3>
                                    <p>
                                        Associação Brasileira de Entidades Estaduais de Tecnologia da
                                        Informação e Comunicação
                                    </p>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Saiba Mais
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="card-title">{paginaAtual}</h1>

                            {/* Missão, Visão e Valores */}
                            <section className="card-section">
                                <h2>Missão, Visão e Valores</h2>
                                <ul>
                                    <li>Prover serviços públicos digitais de excelência.</li>
                                    <li>Ser referência regional em governo digital.</li>
                                    <li>
                                        Colaboração, Inovação, Eficiência, Transparência e
                                        Cidadania Digital.
                                    </li>
                                </ul>
                            </section>

                            {/* Projetos Envolvidos */}
                            <section className="card-section">
                                <h2>Projetos Envolvidos</h2>
                                <ul>
                                    <li>Padronização de Serviços Digitais</li>
                                    <li>
                                        Recadastramento e Melhoria dos Serviços Públicos Digitais
                                    </li>
                                </ul>
                            </section>

                            {/* Portfólio de Sistemas */}
                            <section className="card-section">
                                <h2>Portfólio de Sistemas</h2>
                                {sistemasGerencia[paginaAtual]?.map((sistema, index) => (
                                    <div key={index} className="card">
                                        <h3>{sistema.nome}</h3>
                                        <p>{sistema.descricao}</p>
                                        <a
                                            href={sistema.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Acessar Sistema
                                        </a>
                                    </div>
                                ))}
                            </section>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage