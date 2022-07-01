import { Route, Routes } from 'react-router-dom';
import './styles/common.css';
import Homepage from './pages/Homepage';
import DisplayFlex from './pages/flexContainer/DisplayFlex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/container/displayFlex' element={<DisplayFlex />} />
      </Routes>
    </div>
  );
}

export default App;
