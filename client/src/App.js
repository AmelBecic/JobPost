import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import MainPage from './components/MainPage/MainPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={MainPage} />
        <Route path="/jobs" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
