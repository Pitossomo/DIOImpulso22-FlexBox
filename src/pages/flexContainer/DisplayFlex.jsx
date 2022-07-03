import CodeExample from "../../components/CodeExample"

const DisplayFlex = () => {
  return (
    <div className="wrapper">
      <h1>Propriedade display: flex</h1>
      <ul>
        <li>Torna a tag um elemento do tipo *flex container*</li>
        <li>Todos os filhos diretos se tornam *flex items*</li>
        <li>Usável em qualquer tipo de tag, inline ou bloco</li>
        <li>Por padrão, os flex items ocupam apenas o espaço do seu conteúdo e ficam dispostos em linha</li>
        <li>Outras propriedades poderão alteram seu comportamento </li>
      </ul>

      <h2>Sem display: flex</h2>
      <CodeExample />

      <h2>Exemplo com display: flex</h2>
      <CodeExample style={{ display: "flex" }} />

      <h2>Exemplo com display: flex e muitos filhos (que reduzem de tamanho e 'vazam' do container)</h2>
      <CodeExample style={{ display: "flex", maxWidth: "300px" }} numItems={9} />
    </div>
  )
}

export default DisplayFlex