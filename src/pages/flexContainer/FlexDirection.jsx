import CodeExample from "../../components/CodeExample"

const FlexDirection = () => (
  <div className="wrapper">
    <h1>Propriedade flex-direction</h1>
    <ul>
      <li>Estabelece o eixo principal do container</li>
      <li>O eixo principal define a ordem de disposição dos itens</li>
      <li>Dispõe os elementos em linha (row) ou coluna (column), podendo reverter seu sentido</li>
      <li>Valores:</li>
      <ul>
        <li>row</li>
        <li>column</li>
        <li>row-reverse</li>
        <li>column-reverse</li>
      </ul>
    </ul>

    <h2>flex-direction: row (padrão)</h2>
    <CodeExample style={{ display: "flex", flexDirection: "row" }} />

    <h2>flex-direction: column</h2>
    <CodeExample style={{ display: "flex", flexDirection: "column" }} />

    <h2>flex-direction: row-reverse</h2>
    <CodeExample style={{ display: "flex", flexDirection: "row-reverse" }} />

    <h2>flex-direction: column-reverse</h2>
    <CodeExample style={{ display: "flex", flexDirection: "column-reverse" }} />

    <h2>flex-direction: row (padrão) com muitos itens</h2>
    <CodeExample style={{ display: "flex", flexDirection: "row" }} numItems={9} />

    <h2>flex-direction: column com muitos itens</h2>
    <CodeExample style={{ display: "flex", flexDirection: "column" }} numItems={9} />

    <h2>flex-direction: row-reverse com muitos itens</h2>
    <CodeExample style={{ display: "flex", flexDirection: "row-reverse" }} numItems={9} />

    <h2>flex-direction: column-reverse com muitos itens</h2>
    <CodeExample style={{ display: "flex", flexDirection: "column-reverse" }} numItems={9} />
  </div>
)

export default FlexDirection 