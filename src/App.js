import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Account} from './pages/Account';
import {Reservation} from './pages/Reservation';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Account} />
        <Route path="/reserve" component={Reservation} />
      </BrowserRouter>
    </div>
  );
}

export default App;
