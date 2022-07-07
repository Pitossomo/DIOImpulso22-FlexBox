import CodeExample from "../../components/CodeExample"

const Order = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade order</h1>
      <ul>
        <li>Define a prioridade do item no ordenamento em relação aos seus elementos irmãos </li>
        <li>Os elementos de menor ordem aparecem primeiro no eixo principal</li>
        <li>Utiliza valores numéricos, com o valor zero sendo o padrão</li>
      </ul>

      <h2>order: 1 para o segundo item</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '2': { order: 1 } }}
      />

      <h2>order: -1 para o segundo item</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '2': { order: -1 } }}
      />

      <h2>order: -1 para o segundo item e order: 0 (padrão) para os demais</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: { order: 0 }, '2': { order: -1 } }}
      />
    </div>
  )
}

export default Order