import CodeExample from "../../components/CodeExample"

const FlexWrap = () => (
  <div className="wrapper" >
    <h1>Propriedade flex-wrap</h1>
    <ul>
      <li>Define:</li>
      <ul>
        <li>o comportamento dos itens que ultrapassem o tamanho do container</li>
        <li>se os itens devem ou não quebrar a linha</li>
        <li>se os itens ultrapassam o limite do container ou quebram a linha</li>
        <li>a distribuição dos itens no eixo secundário do container</li>
      </ul>
      <li>Valores:</li>
      <ul>
        <li>nowrap (padrão)</li>
        <li>wrap</li>
        <li>wrap-reverse</li>
      </ul>
    </ul>

    <h2>flex-wrap: nowrap (padrão)</h2>
    <CodeExample style={{ display: "flex", flexWrap: "nowrap", maxWidth: "300px" }} />

    <h2>flex-wrap: nowrap (padrão) com muitos itens</h2>
    <CodeExample style={{ display: "flex", flexWrap: "nowrap", maxWidth: "300px" }} numItems={9} />

    <h2>flex-wrap: wrap</h2>
    <CodeExample style={{ display: "flex", flexWrap: "wrap", maxWidth: "300px" }} />

    <h2>flex-wrap: wrap com dimensões pré-defnidas</h2>
    <CodeExample style={{ display: "flex", flexWrap: "wrap", width: "300px", height: "50px" }} />

    <h2>flex-wrap: wrap com muitos itens e dimensões pré-definidas</h2>
    <CodeExample style={{ display: "flex", flexWrap: "wrap", width: "300px", height: "150px" }} numItems={9} />

    <h2>flex-wrap: wrap-reverse com muitos itens e dimensões pré-definidas</h2>
    <CodeExample style={{ display: "flex", flexWrap: "wrap-reverse", width: "300px", height: "150px" }} numItems={9} />

    <h2>flex-wrap: wrap em coluna e com dimensões pré-definidas</h2>
    <CodeExample style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", width: "300px", height: "150px" }} numItems={9} />
  </div >
)

export default FlexWrap