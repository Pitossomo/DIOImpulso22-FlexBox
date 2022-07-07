import CodeExample from "../../components/CodeExample"

const FlexShrink = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade flex-shrink</h1>
      <ul>
        <li>Define a proporcionalidade de compressão dos itens</li>
        <li>Respeita o tamanho interno dos conteúdos</li>
        <li>Não funciona caso o flex container implemente a propriedade justify-content</li>
        <li>Valores numéricos</li>
      </ul>

      <h2>flex-shrink: 1 (padrão)</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexShrink: 1 } }} />

      <h2>flex-shrink: 0</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexShrink: 0 } }} />

      <h2>flex-shrink: 1 (padrão), container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: "500px" }} childrenStyle={{ default: { flexShrink: 1 } }} />

      <h2>flex-shrink: 0, container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: "500px" }} childrenStyle={{ default: { flexShrink: 0 } }} />

      <h2>flex-shrink variável entre itens, container com largura fixa</h2>
      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexGrow: 1 },
          1: { flexGrow: 3 }
        }}
      />


    </div>
  )
}

export default FlexShrink