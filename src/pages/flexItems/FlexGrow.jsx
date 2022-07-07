import CodeExample from "../../components/CodeExample"

const FlexGrow = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade flex-grow</h1>
      <ul>
        <li>Define a proporcionalidade de crescimento dos itens</li>
        <li>Respeita o tamanho interno dos conteúdos</li>
        <li>Não funciona caso o flex container implemente a propriedade justify-content</li>
        <li>Valores numéricos</li>
      </ul>

      <h2>flex-grow: 0 (padrão)</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexGrow: 0 } }} />

      <h2>flex-grow: 1</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexGrow: 1 } }} />

      <h2>flex-grow: 0 (padrão), container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: "500px" }} childrenStyle={{ default: { flexGrow: 0 } }} />

      <h2>flex-grow: 1, container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: "500px" }} childrenStyle={{ default: { flexGrow: 1 } }} />

      <h2>flex-grow variável entre itens, container com largura fixa</h2>
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

export default FlexGrow