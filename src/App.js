import React from 'react';
import Header from './Components/Header';
import Homepage from './Views/Homepage';
import About from './Views/About';
import Contact from './Views/Contact';
import Users from './Views/Users';
import {Switch , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
       <Switch>
              <Route exact path = '/'>
                  <Homepage />
              </Route>

              <Route exact path = '/about'>
                  <About />
              </Route>

              <Route exact path = '/contact'>
                  <Contact />
              </Route>

              <Route exact path = '/users'>
                  <Users />
              </Route>
       </Switch>
    </div>
  );
}

export default App;
