function ProdutoCard({ nome, preco, imagem, descricao }) {
  const precoFormatado = Number(preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="produto-card">
      {imagem ? (
        <img
          className="produto-imagem"
          src={imagem}
          alt={nome}
          onError={(evento) => {
            evento.currentTarget.src = "https://placehold.co/600x400?text=Produto";
          }}
        />
      ) : (
        <div className="produto-sem-imagem">Sem imagem</div>
      )}

      <div className="produto-informacoes">
        <h3>{nome}</h3>
        <p className="produto-descricao">{descricao}</p>
        <div className="produto-rodape">
          <strong>{precoFormatado}</strong>
          <span>Disponível</span>
        </div>
      </div>
    </article>
  );
}

export default ProdutoCard;
