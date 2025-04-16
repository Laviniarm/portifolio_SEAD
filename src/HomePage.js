import React, {useState} from "react";

const HomePage = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [modalTitulo, setModalTitulo] = useState("");
    const [modalDescricao, setModalDescricao] = useState("");
    const abrirModal = (titulo, descricao) => {
        setModalTitulo(titulo);
        setModalDescricao(descricao);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

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
                    <h2 className="section-title">Base Digital</h2>
                    <div className="card-grid-l">
                        <div className="card-l">
                            <h3>Organograma</h3>
                            <p>Estrutura organizacional da secretaria</p>
                            <a href="https://paraiba.pb.gov.br/diretas/secretaria-de-administracao/arquivos/2024_sead-organograma-em-21-03-2024.pdf/"
                               target="_blank" rel="noopener noreferrer">
                                Visualizar
                            </a>
                        </div>
                        <div className="card-l">
                            <h3>Site Paraíba Digital</h3>
                            <p>Serviços ao cidadão e acesso as informações </p>
                            <a href="https://paraibadigital.pb.gov.br/">
                                Visualizar
                            </a>
                        </div>
                        <div className="card-l">
                            <h3>Decretos</h3>
                            <p>Normativas e regulamentações</p>
                            <a href="https://paraiba.pb.gov.br/diretas/secretaria-de-administracao/institucional/legislacoes"
                               target="_blank" rel="noopener noreferrer">
                                Acessar
                            </a>
                        </div>
                        <div className="card-l">
                            <h3>PLO</h3>
                            <p>Plano de Logística Organizacional</p>
                            <a href="https://transparencia.pb.gov.br/orcamento/normas-orcamentarias" target="_blank"
                               rel="noopener noreferrer">
                                Consultar
                            </a>
                        </div>
                        <div className="card-l">
                            <h3>ABEPTIC</h3>
                            <p>
                                Associação Brasileira de Entidades Estaduais de Tecnologia da
                                Informação e Comunicação
                            </p>
                            <a href="https://abep-tic.org.br/" target="_blank" rel="noopener noreferrer">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </section>

                <section className="detailed-info">
                    <div className="secretaria-section">
                        <h1 className="section-title text-center">
                           Secretaria Executiva de Modernização e Transformação Digital (SEMTD)
                        </h1>
                        <section className="card-section">
                            <h3>Objetivo</h3>
                            <div className="card objetivo-card">
                            <p>
                                Promover a modernização e a transformação digital dos serviços públicos,
                                garantindo eficiência, transparência e acessibilidade para todos os cidadãos,
                                por meio da supervisão e controle da execução das políticas estaduais de
                                modernização e transformação digital, assegurando a otimização da gestão
                                pública e o alinhamento estratégico das iniciativas tecnológicas.
                            </p>
                            </div>
                        </section>
                        <section className="card-section">
                            <h3>Diretrizes de Atuação</h3>
                            <div className="cards-grid">
                                {[
                                    {
                                        titulo: "Acessibilidade",
                                        descricao: "Garantir que todos os cidadãos tenham acesso fácil e equitativo aos serviços públicos digitais, promovendo inclusão e usabilidade."
                                    },
                                    {
                                        titulo: "Comprometimento",
                                        descricao: "Dedicar-se à excelência e à ética, visando resultados que beneficiem a sociedade de forma transparente e responsável."
                                    },
                                    {
                                        titulo: "Inovação",
                                        descricao: "Incentivar a adoção de novas tecnologias e abordagens criativas para melhorar a eficiência e a qualidade dos serviços públicos."
                                    },
                                    {
                                        titulo: "Colaboração",
                                        descricao: "Fomentar o trabalho conjunto entre setores da administração pública e a sociedade civil, valorizando a cooperação para o sucesso das iniciativas."
                                    },
                                    {
                                        titulo: "Proatividade",
                                        descricao: "Antecipar necessidades e propor soluções para desafios, assegurando uma administração ágil e eficiente na prestação de serviços."
                                    }
                                ].map((valor, index) => (
                                    <div
                                        className="card valor-card"
                                        key={index}
                                        onClick={() => abrirModal(valor.titulo, valor.descricao)}
                                    >
                                        <h4>{valor.titulo}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="card-section">
                            <h3>Cargos e Atribuições</h3>
                            <div className="card cargo-card">
                                <h4 className="cargo-titulo">Secretário Executivo de Modernização e Transformação Digital</h4>
                                <p>
                                    Responsável por assessorar diretamente o Secretário da Administração na condução da política estadual de modernização e transformação digital.
                                    Atua na supervisão e articulação de ações estratégicas junto a órgãos públicos, participa da execução do Governo Digital,
                                    propõe melhorias na gestão, acompanha licitações da área e pode representar o Secretário em suas ausências.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Separador Visual */}
                    <div className="separator">

                    </div>

                    <div className="diretoria-section">
                        <h1 className="section-title text-center">
                           Diretoria Executiva de Estratégia e Transformação Digital (DEEST)
                        </h1>
                        <section className="card-section">
                            <h3>Objetivo</h3>
                            <div className="card objetivo-card">
                                <p>
                                    Promover a transformação digital no setor público, coordenando a estratégia,
                                    inovação e desenvolvimento de soluções digitais que otimizem processos e melhorem
                                    o atendimento ao cidadão.
                                </p>
                            </div>
                        </section>
                        <section className="card-section">
                            <h3>Diretrizes de Atuação</h3>
                            <div className="cards-grid">
                                {[
                                    {
                                        titulo: "Inovação",
                                        descricao: "Incentivar a busca contínua por novas tecnologias e práticas que aprimorem os serviços digitais e os processos internos."
                                    },
                                    {
                                        titulo: "Transparência",
                                        descricao: "Atuar com clareza e responsabilidade na gestão de plataformas digitais e na relação com os cidadãos."
                                    },
                                    {
                                        titulo: "Colaboração",
                                        descricao: "Valorizar o trabalho em equipe e a articulação com outras áreas e órgãos para alcançar soluções mais eficazes e integradas."
                                    },
                                    {
                                        titulo: "Excelência",
                                        descricao: "Comprometer-se a entregar serviços de alta qualidade, focados em resultados e em melhorias contínuas."
                                    },
                                    {
                                        titulo: "Ética",
                                        descricao: "Manter uma conduta íntegra e alinhada às normas e diretrizes superiores, garantindo que todas as ações sejam realizadas com responsabilidade e respeito às políticas públicas."
                                    },
                                    {
                                        titulo: "Sustentabilidade",
                                        descricao: "Buscar soluções digitais que sejam sustentáveis a longo prazo, tanto tecnicamente quanto no impacto social e ambiental."
                                    }
                                ].map((valor, index) => (
                                    <div
                                        className="card valor-card"
                                        key={index}
                                        onClick={() => abrirModal(valor.titulo, valor.descricao)}
                                    >
                                        <h4>{valor.titulo}</h4>
                                    </div>
                                ))}
                            </div>
                            <section className="card-section">
                                <h3>Cargos e Atribuições</h3>
                                <div className="card cargo-card">
                                    <h4 className="cargo-titulo">Diretor Executivo de Estratégia e Transformação Digital</h4>
                                    <p>
                                        Responsável por coordenar e executar a política estadual de transformação digital,
                                        abrangendo planejamento estratégico, inovação, plataformas digitais e atendimento ao cidadão.
                                        Supervisiona contratos e projetos, orienta processos digitais e de governança, articula com outros órgãos,
                                        promove capacitações, define fluxos internos e contribui para o orçamento da área.
                                        Atua com foco em resultados e na modernização da gestão pública.
                                    </p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </main>
            {/* Modal Bonito */}
            {modalAberto && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={fecharModal}>×</button>
                        <h2>{modalTitulo}</h2>
                        <p>{modalDescricao}</p>
                    </div>
                </div>
            )}
        </>
    );
};



export default HomePage;
