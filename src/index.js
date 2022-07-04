import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DisplayFlex from './pages/flexContainer/DisplayFlex';
import FlexDirection from './pages/flexContainer/FlexDirection';
import FlexWrap from './pages/flexContainer/FlexWrap';
import FlexFlow from './pages/flexContainer/FlexFlow';
import JustifyContent from './pages/flexContainer/JustifyContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/container/displayFlex' element={<DisplayFlex />} />
        <Route path='/container/flexDirection' element={<FlexDirection />} />
        <Route path='/container/flexWrap' element={<FlexWrap />} />
        <Route path='/container/flexFlow' element={<FlexFlow />} />
        <Route path='/container/justifyContent' element={<JustifyContent />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);