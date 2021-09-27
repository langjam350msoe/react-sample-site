import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Page from './Page'

function NavBar() {
    return (
        <h1 className="App">
            <Router>
          <li>
              <Route exact path='/Page' component='{ Page }'>Page Route</Route>
          </li>
          </Router>
        </h1>
      );
}

export default NavBar;