import { Route, Routes } from 'react-router-dom';
import './styles/common.css';
import Homepage from './pages/Homepage';
import DisplayFlex from './pages/flexContainer/DisplayFlex';
import FlexDirection from './pages/flexContainer/FlexDirection';
import FlexFlow from './pages/flexContainer/FlexFlow';
import FlexWrap from './pages/flexContainer/FlexWrap';
import JustifyContent from './pages/flexContainer/JustifyContent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/DIOImpulso22-FlexBox' element={<Homepage />} />
        <Route path='/container/displayFlex' element={<DisplayFlex />} />
        <Route path='/container/flexDirection' element={<FlexDirection />} />
        <Route path='/container/flexWrap' element={<FlexWrap />} />
        <Route path='/container/flexFlow' element={<FlexFlow />} />
        <Route path='/container/justifyContent' element={<JustifyContent />} />
      </Routes>
    </div>
  );
}

export default App;
