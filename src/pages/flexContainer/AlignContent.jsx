import CodeExample from "../../components/CodeExample"

const AlignContent = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade align-content</h1>
      <ul>
        <li>Define o alinhamento das linhas dentro do container ao longo do eixo secundário</li>
        <li>O container precisa utilizar a quebra de linhas (isto é, a propriedade flex-wrap deve ser usada)</li>
        <li>O container precisa ser maior que a soma das linhas dos itens</li>
        <li>Valores:</li>
        <ul>
          <li>stretch (padrão) - infla os itens</li>
          <li>flex-start - início do container</li>
          <li>flex-end - final do container, respeitando o limite do conteúdo</li>
          <li>center - centro do container</li>
          <li>space-between - espaçamento igual entre elemnetos</li>
          <li>space-around - espaçamentos inicial e final serão metade do espaçamento entre cada item</li>
        </ul>
      </ul>

      <h2>align-content: stretch (padrão)</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "stretch" }} numItems={9} />

      <h2>align-content: center</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "center" }} numItems={9} />

      <h2>align-content: flex-start</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start" }} numItems={9} />

      <h2>align-content: flex-end</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-end" }} numItems={9} />

      <h2>align-content: space-around</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "space-around" }} numItems={9} />

      <h2>align-content: space-between</h2>
      <CodeExample style={{ display: "flex", flexWrap: "wrap", alignContent: "space-between" }} numItems={9} />
    </div>
  )
}

export default AlignContent