import CodeExample from "../../components/CodeExample"

const JustifyContent = () => (
  <div className="wrapper">
    <h1>Propriedade justify-content</h1>
    <ul>
      <li>Define o alinhamento dos itens dentro do container ao longo do eixo principal</li>
      <li>Caso os itens ocupem 100% do container, não se aplica</li>
      <li>Isso porque essa propriedade define a distribuição do espaço excedente não ocupado pelos itens ao longo do
        eixo principal</li>
      <li>Valores:</li>
      <ul>
        <li>flex-start - início do container</li>
        <li>flex-end - final do container, respeitando o limite do conteúdo</li>
        <li>center - centro do container</li>
        <li>space-between - cria espaçamento igual entre os elementos, removendo os espaços no início e no fim do eixo
          principal</li>
        <li>space-around - cria espaçamento igual entre os elementos, com metade deste espaçamento no começo e no fim do
          eixo principal</li>
        <li>Há outros valores, como left, right, normal, stretch, etc. mas nem sempre aplicáveis ao flexbox </li>
      </ul>
    </ul>

    <h2>justify-content: flex-start (padrão)</h2>
    <CodeExample style={{ display: "flex", justifyContent: "flex-start" }} numItems={9} />

    <h2>justify-content: flex-end</h2>
    <CodeExample style={{ display: "flex", justifyContent: "flex-end" }} numItems={9} />

    <h2>justify-content: flex-end com dimensões pré-definidas</h2>
    <CodeExample style={{ display: "flex", justifyContent: "flex-end", width: "300px" }} numItems={9} />

    <h2>justify-content: flex-start e flex-direction: row-reverse, com dimensões pré-definidas</h2>
    <CodeExample style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row-reverse", width: "300px" }} numItems={9} />

    <p>Observa-se que entre os dois últimos resultados a disposição foi parecida, mas a ordem dos itens ficou invertida
    </p>

    <h2>justify-content: space-between e largura definida</h2>
    <CodeExample style={{ display: "flex", justifyContent: "space-between", width: "500px" }} />

    <h2>justify-content: space-around e largura definida</h2>
    <CodeExample style={{ display: "flex", justifyContent: "space-around", width: "500px" }} />
  </div>
)

export default JustifyContent