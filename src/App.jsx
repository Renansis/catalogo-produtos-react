import { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import FormularioProduto from "./components/FormularioProduto";

const produtosIniciais = [
  {
    id: 1,
    nome: "Smartphone Galaxy A55",
    preco: 1899.9,
    descricao: "Tela Super AMOLED, câmera de alta resolução e ótimo desempenho para o dia a dia.",
    imagem: "https://images.unsplash.com/photo-1511707551639-4c0a6b5b6f7a?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    nome: "Fone Bluetooth",
    preco: 249.9,
    descricao: "Som nítido, conexão sem fio e bateria para acompanhar sua rotina.",
    imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    nome: "Smartwatch Sport",
    preco: 399.9,
    descricao: "Acompanhe suas atividades, notificações e metas com praticidade.",
    imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setProdutos(produtosIniciais);
      setCarregando(false);
    }, 1200);

    
    return () => clearTimeout(temporizador);
  }, []);

  function adicionarProduto(novoProduto) {
    setProdutos((listaAtual) => [
      ...listaAtual,
      { ...novoProduto, id: Date.now() },
    ]);
  }

  return (
    <div className="app">
      <header className="topo">
        <a className="logo" href="#inicio">vitrine<span>.</span></a>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#cadastro">Cadastrar produto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-conteudo">
            <span className="etiqueta">CATÁLOGO DIGITAL</span>
            <h1>Encontre o que combina com você.</h1>
            <p>Uma vitrine simples para visualizar e cadastrar produtos.</p>
            <a className="botao-hero" href="#produtos">Ver produtos</a>
          </div>
          <div className="hero-destaque" aria-hidden="true">
            <div className="circulo">V.</div>
            <span>Novidades<br />e ofertas</span>
          </div>
        </section>

        <section className="secao-produtos" id="produtos">
          <div className="cabecalho-secao">
            <div>
              <span className="etiqueta">NOSSA VITRINE</span>
              <h2>Produtos disponíveis</h2>
            </div>
            <span className="contador">{produtos.length} produto(s)</span>
          </div>

          {carregando ? (
            <p className="mensagem-carregando">Carregando produtos...</p>
          ) : produtos.length > 0 ? (
            <div className="grade-produtos">
              {produtos.map((produto) => (
                <ProdutoCard
                  key={produto.id}
                  nome={produto.nome}
                  preco={produto.preco}
                  imagem={produto.imagem}
                  descricao={produto.descricao}
                />
              ))}
            </div>
          ) : (
            <p className="mensagem-vazia">Nenhum produto cadastrado ainda.</p>
          )}
        </section>

        <section className="secao-cadastro" id="cadastro">
          <div className="texto-cadastro">
            <span className="etiqueta">SUA LOJA</span>
            <h2>Adicionar um produto</h2>
            <p>Preencha os dados abaixo. O produto será adicionado à vitrine assim que você enviar o formulário.</p>
          </div>
          <FormularioProduto onAdicionarProduto={adicionarProduto} />
        </section>
      </main>

      <footer>
        <a className="logo" href="#inicio">vitrine<span>.</span></a>
        <p>Projeto de estudo desenvolvido com React.</p>
      </footer>
    </div>
  );
}

export default App;
