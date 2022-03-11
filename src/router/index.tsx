import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Login from '../pages/login/index';
import Home from '../pages/home/index';
import Play from '../pages/play/index';
import Goods from '../pages/goods/index';
import Team from '../pages/team/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="" element={<Team />}></Route>
          <Route path="/home/play" element={<Play />}></Route>
          <Route path="/home/goods" element={<Goods />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
