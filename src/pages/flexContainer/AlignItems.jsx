import CodeExample from "../../components/CodeExample"

const AlignItems = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade align-items</h1>
      <ul>
        <li>Define o alinhamento dos itens dentro do container ao longo do eixo secundário</li>
        <li>Caso os itens ocupem 100% do container, não se aplica</li>
        <li>Isso porque essa propriedade define a distribuição do espaço excedente não ocupado pelos itens ao longo do
          eixo secundário</li>
        <li>Diferentemente do justify-content, esta propriedade não precisa ter informação sobra as dimensões dos itens</li>
        <li>Isso porque o align-items usa a proporcionalidade para dimensionar e distribuir os itens</li>
        <li>Valores:</li>
        <ul>
          <li>stretch (padrão) - infla os itens</li>
          <li>flex-start - início do container</li>
          <li>flex-end - final do container, respeitando o limite do conteúdo</li>
          <li>center - centro do container</li>
          <li>baseline - alinha conforme a linha base da tipografia dos itens</li>
        </ul>
      </ul>

      <h2>align-items: stretch (padrão)</h2>
      <CodeExample style={{ display: "flex", alignItems: "stretch" }} />

      <h2>align-items: center</h2>
      <CodeExample style={{ display: "flex", alignItems: "center" }} />

      <h2>align-items: flex-start</h2>
      <CodeExample style={{ display: "flex", alignItems: "flex-start" }} />

      <h2>align-items: flex-end</h2>
      <CodeExample style={{ display: "flex", alignItems: "flex-end" }} />

      <h2>align-items: baseline</h2>
      <CodeExample style={{ display: "flex", alignItems: "baseline" }} />
    </div>
  )
}

export default AlignItems