import CodeExample from "../../components/CodeExample"

const Flex = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade flex</h1>
      <ul>
        <li>Atalho para as propriedades grow, shrink e basis (nesta ordem)</li>
        <li>Precisa de 3 valores: o primeiro para o grow,  o segundo para o shrink e o terceiro para o basis</li>
      </ul>

      <h2>flex: 1 (padrão)</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flex: '0 1 auto' } }} />
    </div>
  )
}

export default Flex