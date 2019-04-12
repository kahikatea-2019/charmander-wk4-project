import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import PageDisplay from './PageDisplay.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <div className="content">
            <div className="nav">
              <Route path='/' component={Nav} />
            </div>
            <Route exact path= '/' component={Home} />
            <div className="book">
              <Route path='/:author' component={PageDisplay} />
            </div>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}
export default App
