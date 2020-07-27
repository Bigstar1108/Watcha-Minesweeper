import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './containers/Main';
import GameHome from './containers/gameHome';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return(
    <div className = "rootDiv">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/Watcha-Minesweeper/' component = {Main} />
          <Route exact path = '/minesweeper' component = {GameHome} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;