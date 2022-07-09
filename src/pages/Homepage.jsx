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
          <li><Link to='/container/displayFlex'>display: flex</Link></li>
          <li><Link to='/container/flexDirection'>flex-direction</Link></li>
          <li><Link to='/container/flexWrap'>flex-wrap</Link></li>
          <li><Link to='/container/flexFlow'>flex-flow</Link></li>
          <li><Link to='/container/JustifyContent'>justify-content</Link></li>
          <li><Link to='/container/AlignItems'>align-items</Link></li>
          <li><Link to='/container/AlignContent'>align-content</Link></li>
        </ul>
        <h2>Flex Items</h2>
        <ul>
          <li><Link to='/items/flexGrow'>flex-grow</Link></li>
          <li><Link to='/items/flexShrink'>flex-shrink</Link></li>
          <li><Link to='/items/flexBasis'>flex-basis</Link></li>
          <li><Link to='/items/flex'>flex</Link></li>
          <li><Link to='/items/order'>order</Link></li>
          <li><Link to='/items/alignSelf'>flex-align</Link></li>
        </ul>
      </section>

      <section>
        <h1>Projeto de consolidação</h1>
        <ul>
          <li>Projeto de aplicação dos conhecimentos adquiridos no curso</li>
          <li>Criação de uma Landing Page para um agência de turismo</li>
          <li><Link to='https://pitossomo.github.io/cuddly-garbanzo/'>Landing page</Link></li>
        </ul>
      </section>

    </div>
  )
}

export default Homepage