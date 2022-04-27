
import './App.css';
import News from './components/News';
import React from 'react'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
const App=()=>{
 
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
        <Route exact path="/">
          <News PageSize={6} key="general" category="general" country="in" />
          </Route>
          <Route exact path="/science">
          <News PageSize={6} key="science" category="science" country="in" />
          </Route>
          <Route exact path="/technology">
          <News PageSize={6} key="technology"category="technology" country="in" />
          </Route>
          <Route exact path="/sports">
          <News PageSize={6} key="sports"category="sports" country="in" />
          </Route>
          <Route exact path="/entertainment">
          <News PageSize={6} key="entertainment" category="entertainment" country="in" />
          </Route>
          <Route exact path="/health">
          <News PageSize={6} key="health" category="health" country="in" />
          </Route>
          
          <Route exact path="/business">
          <News PageSize={6} key="business" category="business" country="in" />
          </Route>
        </Switch>

        </Router>
      </div>
    )
  }

  export default App