import React, { useState } from "react";

const HomePage = () => {

    return (
        <>
            {/* Conteúdo Principal */}
            <main className="main-content">
                        {/* Hero Section */}
                        <section className="hero">
                            <div className="hero-overlay">
                                <h1>Transformação Digital no Setor Público</h1>
                            </div>
                        </section>

                        {/* Seção de Links Rápidos */}
                        <section className="home-links">
                            <h2 className="section-title">Informações Essenciais</h2>
                            <div className="card-grid">
                                <div className="card">
                                    <h3>Organograma</h3>
                                    <p>Estrutura organizacional da secretaria</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Visualizar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>Decreto</h3>
                                    <p>Normativas e regulamentações</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Acessar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>PLO</h3>
                                    <p>Plano de Logística Organizacional</p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Consultar
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>ABEPTIC</h3>
                                    <p>
                                        Associação Brasileira de Entidades Estaduais de Tecnologia da
                                        Informação e Comunicação
                                    </p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Saiba Mais
                                    </a>
                                </div>
                            </div>
                        </section>

                <section className="detailed-info">
                    <div className="secretaria-section">
                        <h1 className="section-title text-center">
                            Secretaria Executiva de Modernização e Transformação Digital
                        </h1>
                        <section className="card-section">
                            <h3>Missão</h3>
                            <p>
                                Promover a modernização e a transformação digital dos serviços públicos,
                                garantindo eficiência, transparência e acessibilidade para todos os cidadãos,
                                por meio da supervisão e controle da execução das políticas estaduais de
                                modernização e transformação digital, assegurando a otimização da gestão
                                pública e o alinhamento estratégico das iniciativas tecnológicas.
                            </p>
                        </section>
                        <section className="card-section">
                            <h3>Visão</h3>
                            <p>
                                Ser referência em inovação e tecnologia no setor público, criando um
                                ambiente digital integrado que facilite a interação entre governo e sociedade.
                            </p>
                        </section>
                        <section className="card-section">
                            <h3>Valores</h3>
                            <div className="cards-grid">
                                {[
                                    "Acessibilidade",
                                    "Comprometimento",
                                    "Inovação",
                                    "Colaboração",
                                    "Proatividade"
                                ].map((valor) => (
                                    <div className="card valor-card" key={valor}>
                                        <h4>{valor}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Separador Visual */}
                    <div className="separator">

                    </div>

                    <div className="diretoria-section">
                        <h1 className="section-title text-center">
                            Diretoria Executiva de Estratégia e Transformação Digital
                        </h1>
                        <section className="card-section">
                            <h3>Missão</h3>
                            <p>
                                Promover a transformação digital no setor público, coordenando a estratégia,
                                inovação e desenvolvimento de soluções digitais que otimizem processos e melhorem
                                o atendimento ao cidadão.
                            </p>
                        </section>
                        <section className="card-section">
                            <h3>Visão</h3>
                            <p>
                                Ser referência nacional em inovação e transformação digital, liderando o avanço de um
                                governo mais ágil, conectado e eficiente.
                            </p>
                        </section>
                        <section className="card-section">
                            <h3>Valores</h3>
                            <div className="cards-grid">
                                {[
                                    "Inovação",
                                    "Transparência",
                                    "Colaboração",
                                    "Excelência",
                                    "Ética",
                                    "Sustentabilidade"
                                ].map((valor) => (
                                    <div className="card valor-card" key={valor}>
                                        <h4>{valor}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
