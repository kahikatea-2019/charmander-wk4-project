import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import ContentDisplay from './ContentDisplay'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <h1>React development has begun!</h1>
          <Route exact path= '/' component={Home} />
          <Route path='/coolbios' component={ContentDisplay} />
        </React.Fragment>
      </Router>
    )
  }
}
export default App
