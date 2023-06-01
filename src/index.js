

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';


const Red = (props) => {
  return (
    <div className='red'>
      <h1>RED</h1>
    </div>
  )
}

const Blue = (props) => {
  return (
    <div className='blue'>
      <h1>BLUE</h1>
    </div>
  )
}

const Main = (props) => {
  return (
    <BrowserRouter>
      <div id='container'>

        <div id='navbar'>
          {/* navigation here */}
          <Link to= "/red">Go to Red</Link>
          <Link to="/blue">Go to Blue</Link>
        </div>

        <div id='main-section'>
          {/* routes here */}
          <Route path="/blue">
            <Blue />
          </Route>
          <Route path="/red">
            <Red />
          </Route>
          <Route exact path="/">
            <Red />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)