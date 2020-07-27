import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { basename } from './config/config.json';
import Main from './containers/Main';
import GameHome from './containers/gameHome';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return(
    <div className = "rootDiv">
      <BrowserRouter basename = {basename}>
        <Switch>
          <Route exact path = '/' component = {Main} />
          <Route exact path = '/minesweeper' component = {GameHome} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;