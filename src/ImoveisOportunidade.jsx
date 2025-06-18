const imoveis = [
  {
    titulo: "Apto semi mobiliado - 2 quartos",
    bairro: "Trindade",
    preco: 415000,
    area: 60,
    preco_m2: 6917,
    desconto: -17.4,
    link: "https://www.exemplo.com/imovel/apto2q-trindade",
  },
  {
    titulo: "Apto funcional - 52 m²",
    bairro: "Trindade",
    preco: 365000,
    area: 52,
    preco_m2: 7019,
    desconto: -16.2,
    link: "https://www.exemplo.com/imovel/apto52m2-trindade",
  },
];

export default function ImoveisOportunidade() {
  return (
    <div style={{ display: "grid", gap: "1rem", padding: "1rem" }}>
      {imoveis.map((imovel, index) => (
        <div
          key={index}
          style={{ border: "2px solid green", padding: "1rem", borderRadius: "12px" }}
        >
          <h2>{imovel.titulo}</h2>
          <p>
            <strong>Bairro:</strong> {imovel.bairro}
          </p>
          <p>
            <strong>Área:</strong> {imovel.area} m²
          </p>
          <p>
            <strong>Preço:</strong> R$ {imovel.preco.toLocaleString()}
          </p>
          <p style={{ color: "green" }}>
            <strong>R$ {imovel.preco_m2.toLocaleString()} / m²</strong>
          </p>
          <p style={{ color: "red" }}>{imovel.desconto}% abaixo da média</p>
          <a href={imovel.link} target="_blank" rel="noopener noreferrer">
            Ver imóvel
          </a>
        </div>
      ))}
    </div>
  );
}
