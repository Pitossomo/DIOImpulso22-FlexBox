import CodeExample from "../../components/CodeExample"

const FlexFlow = () => (
  <div className="wrapper">
    <h1>Propriedade flex-flow</h1>
    <ul>
      <li>É a união das propriedades flex-direction e flex-wrap</li>
      <li>Estabelece o eixo principal e secundário do container ao mesmo tempo</li>
      <li>Não é muito usado na prática, porque quando mudamos o comportamento padrão do flex-direction de row para
        column, em geral, é mais comum mantermos o nowrap</li>
      <li>Ou seja, são poucos os casos em que mudamos tanto o flex-direction quanto o flex-wrap</li>
      <li>Valores:</li>
      <ul>
        <li>row nowrap (padrão)</li>
        <li>row wrap</li>
        <li>row wrap-reverse</li>
        <li>column nowrap</li>
        <li>column wrap</li>
        <li>column wrap-reverse</li>
        <li>row-reverse nowrap</li>
        <li>row-reverse wrap</li>
        <li>row-reverse wrap-reverse</li>
        <li>column-reverse nowrap</li>
        <li>column-reverse wrap</li>
        <li>column-reverse wrap-reverse</li>
      </ul>
    </ul>

    <h2>flex-flow: row nowrap (padrão) com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row nowrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: row wrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row wrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: row wrap-reverse com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row wrap-reverse", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column nowrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column nowrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column wrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column wrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column wrap-reverse com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column wrap-reverse", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: row-reverse nowrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row-reverse nowrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: row-reverse wrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row-reverse wrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: row-reverse wrap-reverse com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "row-reverse wrap-reverse", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column-reverse nowrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column-reverse nowrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column-reverse wrap com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column-reverse wrap", width: "300px", height: "120px" }} numItems={9} />

    <h2>flex-flow: column wrap-reverse com muitos itens e dimensões pré-fixadas</h2>
    <CodeExample style={{ display: "flex", flexFlow: "column-reverse wrap-reverse", width: "300px", height: "120px" }} numItems={9} />
  </div>
)

export default FlexFlow