import React from 'react';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
