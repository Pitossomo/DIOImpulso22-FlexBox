import { Route, Routes } from 'react-router-dom';
import './styles/common.css';
import Homepage from './pages/Homepage';
import DisplayFlex from './pages/flexContainer/DisplayFlex';
import FlexDirection from './pages/flexContainer/FlexDirection';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/DIOImpulso22-FlexBox' element={<Homepage />} />
        <Route path='/container/displayFlex' element={<DisplayFlex />} />
        <Route path='/container/flexDirection' element={<FlexDirection />} />
      </Routes>
    </div>
  );
}

export default App;
