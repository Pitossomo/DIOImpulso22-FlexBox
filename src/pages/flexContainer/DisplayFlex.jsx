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
      <div className="example">
        <code><pre>
          &lt;div className="preview"&gt;
          &nbsp;&nbsp;&lt;div&gt;item 1&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 2&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 3&lt;/div&gt;
          &lt;/div&gt;
        </pre></code>
        <div className="preview">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
        </div>
      </div>

      <h2>Exemplo com display: flex</h2>
      <div className="example">
        <code><pre>
          &lt;div style="display: flex" className="preview"&gt;
          &nbsp;&nbsp;&lt;div&gt;item 1&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 2&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 3&lt;/div&gt;
          &lt;/div&gt;
        </pre></code>
        <div style={{ display: 'flex' }} className="preview">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
        </div>
      </div>

      <h2>Exemplo com display: flex e muitos filhos (que reduzem de tamanho e 'vazam' do container)</h2>
      <div className="example">
        <code><pre>
          &lt;div style="display: flex; max-width: 300px" className="preview"&gt;
          &nbsp;&nbsp;&lt;div&gt;item 1&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 2&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 3&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 4&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 5&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 6&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 7&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 8&lt;/div&gt;
          &nbsp;&nbsp;&lt;div&gt;item 9&lt;/div&gt;
          &lt;/div&gt;
        </pre></code>
        <div style={{ display: 'flex', maxWidth: "300px" }} className="preview">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
          <div>item 8</div>
          <div>item 9</div>
        </div>
      </div>
    </div>
  )
}

export default DisplayFlex