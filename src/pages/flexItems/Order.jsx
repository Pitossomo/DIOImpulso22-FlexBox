import CodeExample from "../../components/CodeExample"

const Order = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade order</h1>
      <ul>
        <li>Atalho para as propriedades grow, shrink e basis (nesta ordem)</li>
        <li>Precisa de 3 valores: o primeiro para o grow, o segundo para o shrink e o terceiro para o basis</li>
        <li>Quando o flex é definido sem a terceira propriedade, o padrão do basis passa a ser 0</li>
      </ul>

      <h2>flex não definido, container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: '500px' }} />

      <h2>flex: 0 1 auto (padrão), container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: '500px' }} childrenStyle={{ default: { flex: '0 1 auto' } }} />

      <h2>flex: 0 ~ grow: 0 (padrão), shrink 1 (padrão), basis: 0 (redefinido)</h2>
      <CodeExample style={{ display: "flex", width: '500px' }} childrenStyle={{ default: { flex: 0 } }} />

      <h2>flex: 1 ~ grow: 1, shrink 1 (padrão), basis: 0 (redefinido)</h2>
      <CodeExample style={{ display: "flex", width: '500px' }} childrenStyle={{ default: { flex: 1 } }} />

      <h2>flex não definido, container em coluna com altura fixa</h2>
      <CodeExample style={{ display: "flex", flexDirection: "column", height: '200px' }} />

      <h2>flex: 0 1 auto (padrão), container em coluna com altura fixa</h2>
      <CodeExample style={{ display: "flex", flexDirection: "column", height: '200px' }} childrenStyle={{ default: { flex: '0 1 auto' } }} />

      <h2>flex: 0 ~ grow: 0 (padrão), shrink 1 (padrão), basis: 0 (redefinido), container em coluna</h2>
      <CodeExample style={{ display: "flex", flexDirection: "column", height: '200px' }} childrenStyle={{ default: { flex: 0 } }} />

      <h2>flex: 1 ~ grow: 1, shrink 1 (padrão), basis: 0 (redefinido)</h2>
      <CodeExample style={{ display: "flex", flexDirection: "column", height: '200px' }} childrenStyle={{ default: { flex: 1 } }} />

      <h2>flex variável entre elementos (grow: 1)</h2>
      <CodeExample
        style={{ display: "flex", flexDirection: "column", height: '200px' }}
        childrenStyle={{
          default: { flex: 0 },
          '2': { flex: '1 0 200px' },
          '3': { flex: '2 1 100px' },
        }} />

    </div>
  )
}

export default Order