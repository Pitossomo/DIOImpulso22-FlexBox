import banner from '../images/0-main.png'
import imgBalcao from '../images/1-quem-somos.png'
import iconHospedagem from '../images/icon-2.png'
import iconPacote from '../images/icon-1.png'
import iconPersonalizado from '../images/icon-3.png'

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>FlexTurismos</h1>
        <ul>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#planos">Planos</a></li>
        </ul>
      </header>

      <div>
        <div>
          <h1>Flex <br />Turismos</h1>
          <p>O melhor serviço para você!</p>
          <a href="">Saiba Mais!</a>
        </div>

        <div>
          <div><img src={banner} alt="banner de apresentação" /></div>
        </div>
      </div>

      <div>
        <div>
          <img src={imgBalcao} alt="balcão de atendimento" />
        </div>

        <div>
          <h2>Quem somos</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
      </div>

      <div>
        <div>
          <h2>Serviços</h2>
        </div>

        <div>
          <div>
            <div><img scr={iconHospedagem} /></div>
            <p>Hospedagens</p>
            <a href="#">Comprar Agora</a>
          </div>

          <div>
            <div><img src={iconPacote} alt="pacote de viagens" /></div>
            <p>Pacotes de viagens</p>
            <a href="#">Comprar Agora</a>
          </div>

          <div>
            <div><img src={iconPersonalizado} alt="roteiros personalizados" /></div>
            <p>Roteiros personalizados</p>
            <a href="#">Comprar Agora</a>
          </div>

        </div>
      </div>

      <div>

        <div>
          <h3>Plano 1</h3>
          <ul>
            <li>Suporte 24h</li>
            <li>Serviços de quarto</li>
            <li>Guia turístico</li>
          </ul>
          <a href="#">Saiba Mais!</a>
        </div>

        <div>
          <h3>Plano 2</h3>
          <ul>
            <li>Suporte 24h</li>
            <li>Serviços de quarto</li>
            <li>Guia turístico</li>
            <li>Roteiro de trilhas</li>
            <li>Serviço personalizado</li>
          </ul>
          <a href="#">Saiba Mais!</a>
        </div>

        <div>
          <h3>Plano 3</h3>
          <ul>
            <li>Suporte 24h</li>
            <li>Serviços de quarto</li>
            <li>Guia turístico</li>
            <li>Roteiro de trilhas</li>
            <li>Serviço personalizado</li>
            <li>Área Vip</li>
          </ul>
          <a href="#">Saiba Mais!</a>
        </div>
      </div>

      <footer>
        <p>&copy; 2021 CSS Flexbox</p>
        <p>Desenvolvido por: Pitossomo</p>
      </footer>
    </div>
  )
}

export default LandingPage
