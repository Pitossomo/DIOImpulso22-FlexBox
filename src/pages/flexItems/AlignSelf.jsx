import CodeExample from "../../components/CodeExample"

const AlignSelf = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade align-self</h1>
      <ul>
        <li>Define o alinhamento individual de um flex item em relação ao eixo secundário</li>
        <li>Desrespeita a propriedade align-items do flex container (exceto no caso do valor auto)</li>
        <li>Valores:
          <ul>
            <li>auto (padrão) - respeita a definição do align-items</li>
            <li>flex-start</li>
            <li>flex-end</li>
            <li>center</li>
            <li>stretch</li>
            <li>baseline</li>
          </ul>
        </li>
      </ul>

      <h2>align-self: auto</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'auto' } }}
      />

      <h2>align-self: auto, altura predefinida para os items</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: { height: '30px' }, '3': { alignSelf: 'auto', height: '30px' } }}
      />

      <h2>align-self: auto, container com align-items: center</h2>
      <CodeExample
        style={{ display: "flex", alignItems: 'center' }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'auto' } }}
      />

      <h2>align-self: flex-start para o item 3</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'flex-start' } }}
      />

      <h2>align-self: flex-end para o item 3</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'flex-end' } }}
      />

      <h2>align-self: flex-end para o item 3, container com align-items: center</h2>
      <CodeExample
        style={{ display: "flex", alignItems: 'center' }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'flex-end' } }}
      />

      <h2>align-self: center para o item 3</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'center' } }}
      />

      <h2>align-self: stretch para o item 3</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'stretch' } }}
      />

      <h2>align-self: baseline para o item 3</h2>
      <CodeExample
        style={{ display: "flex" }}
        childrenStyle={{ default: {}, '3': { alignSelf: 'baseline' } }}
      />
    </div>
  )
}

export default AlignSelf