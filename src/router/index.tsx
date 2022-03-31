import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

/**
 * 引入 react-redux
 */
import {Provider} from 'react-redux'

// 引入store
import store from '../store/index'

import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Play from '../pages/Play/index';
import Goods from '../pages/Goods/index';
import Team from '../pages/Team/index';


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
