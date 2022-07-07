import CodeExample from "../../components/CodeExample"

const FlexBasis = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade flex-basis</h1>
      <ul>
        <li>Define o tamanho minimo inicial do item antes de tratar o crescimento</li>
        <li>Valores</li>
        <ul>
          <li>auto (padrão) - caso o item não tenha dimensões definidas, será proporcional ao conteúdo do item</li>
          <li>px, %, em, ... - valores exatos similares à width e height</li>
          <li>0 (zero) - terá relação com o flex-grow</li>
        </ul>
      </ul>

      <h2>flex-basis: auto (padrão)</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexBasis: 'auto' } }} />

      <h2>flex-basis: 25%</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexBasis: '25%' } }} />

      <h2>flex-basis: 25%, container com largura fixa</h2>
      <CodeExample style={{ display: "flex", width: "500px" }} childrenStyle={{ default: { flexBasis: '25%' } }} />

      <h2>flex-basis: 0</h2>
      <CodeExample style={{ display: "flex" }} childrenStyle={{ default: { flexBasis: 0 } }} />

      <h2>flex-basis variável entre itens, container com largura fixa</h2>
      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '20%' },
          '1': { flexBasis: '60%' }
        }}
      />

      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '1%' },
          '1': { flexBasis: '98%' }
        }}
      />

      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '1em' },
          '1': { flexBasis: '3em' }
        }}
      />

      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '1em' },
          '1': { flexBasis: 'auto' }
        }}
      />


      <h2>flex-basis variável entre itens, flexGrow: 1, container com largura fixa</h2>
      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '20%', flexGrow: 1 },
          '1': { flexBasis: '60%', flexGrow: 1 }
        }}
      />

      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '1%', flexGrow: 1 },
          '1': { flexBasis: '98%', flexGrow: 1 }
        }}
      />

      <CodeExample
        style={{ display: "flex", width: "500px" }}
        childrenStyle={{
          default: { flexBasis: '1em', flexGrow: 1 },
          '1': { flexBasis: '3em', flexGrow: 1 }
        }}
      />
    </div>
  )
}

export default FlexBasis