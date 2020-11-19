import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './views/home'
import App from './views/app'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/app" component={App} />
    </Switch>
  </Router>
)

export default Routes

