import './styles/common.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/container/displayFlex'>display: flex</Link></li>
          <li><Link to='/container/flexDirection'>flex-direction</Link></li>
          <li><Link to='/container/flexWrap'>flex-wrap</Link></li>
          <li><Link to='/container/flexFlow'>flex-flow</Link></li>
          <li><Link to='/container/JustifyContent'>justify-content</Link></li>
          <li><Link to='/container/AlignContent'>align-content</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
