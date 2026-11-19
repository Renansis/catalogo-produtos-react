import { useState } from "react";

function FormularioProduto({ onAdicionarProduto }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  function lidarComEnvio(evento) {
    evento.preventDefault();

    const produto = {
      nome: nome.trim(),
      preco: Number(preco),
      descricao: descricao.trim(),
      imagem: imagem.trim(),
    };

    onAdicionarProduto(produto);

    // Limpa os campos depois de cadastrar.
    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
  }

  return (
    <form className="formulario" onSubmit={lidarComEnvio}>
      <label htmlFor="nome">Nome do produto *</label>
      <input
        id="nome"
        type="text"
        placeholder="Ex.: Smartphone Galaxy"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        required
      />

      <label htmlFor="preco">Preço (R$) *</label>
      <input
        id="preco"
        type="number"
        placeholder="Ex.: 1999.90"
        min="0.01"
        step="0.01"
        value={preco}
        onChange={(evento) => setPreco(evento.target.value)}
        required
      />

      <label htmlFor="descricao">Descrição *</label>
      <textarea
        id="descricao"
        placeholder="Descreva as características do produto..."
        rows="4"
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        required
      />

      <label htmlFor="imagem">Link da imagem (opcional)</label>
      <input
        id="imagem"
        type="url"
        placeholder="https://exemplo.com/imagem.jpg"
        value={imagem}
        onChange={(evento) => setImagem(evento.target.value)}
      />

      <button type="submit" className="botao-enviar">Cadastrar produto</button>
    </form>
  );
}

export default FormularioProduto;
