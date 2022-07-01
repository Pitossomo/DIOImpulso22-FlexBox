import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div>
      <section>
        <h1>FlexBox</h1>
        <p>O flexbox é um conceito que facilita a disposição e dimensionamento dos itens em um elemento pai (container).</p>
        <p>Alguns conceitos são necessários para entender o flexbox</p>
        <ul>
          <li>Flex-container (elemento pai) e flex-itens (elementos filhos)</li>
          <li>Eixo principal e secundário</li>
        </ul>

        <p>As propriedade usadas para definir o comportamento dos itens são apresentadas a seguir.</p>
      </section>

      <section>
        <h1>Propriedades</h1>
        <h2>Flex Container</h2>
        <ul>
          <Link to='/container/displayFlex'>display: flex</Link>
        </ul>
      </section>
    </div>
  )
}

export default Homepage