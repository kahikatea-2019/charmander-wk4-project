import React from 'react'
import Home from './Home.jsx'
import { HashRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <h1>React development has begun!</h1>
          <Route exact path= '/' component={Home} />
        </React.Fragment>
      </Router>
    )
  }
}
export default App
