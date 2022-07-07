import './styles/common.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DisplayFlex from './pages/flexContainer/DisplayFlex';
import FlexDirection from './pages/flexContainer/FlexDirection';
import FlexWrap from './pages/flexContainer/FlexWrap';
import FlexFlow from './pages/flexContainer/FlexFlow';
import JustifyContent from './pages/flexContainer/JustifyContent';
import AlignContent from './pages/flexContainer/AlignContent';
import AlignItems from './pages/flexContainer/AlignItems';
import FlexGrow from './pages/flexItems/FlexGrow';
import FlexBasis from './pages/flexItems/FlexBasis';
import FlexShrink from './pages/flexItems/FlexShrink';
import Flex from './pages/flexItems/Flex';

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
        <Route path='/container/alignItems' element={<AlignItems />} />
        <Route path='/container/alignContent' element={<AlignContent />} />
        <Route path='/items/flexGrow' element={<FlexGrow />} />
        <Route path='/items/flexBasis' element={<FlexBasis />} />
        <Route path='/items/flexShrink' element={<FlexShrink />} />
        <Route path='/items/flex' element={<Flex />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);