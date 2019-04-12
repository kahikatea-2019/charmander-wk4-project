import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Title from './Title.jsx'
import PageDisplay from './PageDisplay.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact path= '/' component={Home} />

          <div className="content">
            <div className="title">
              <Route path='/:author' component={Title} />
            </div>

            <div className="container">
              <div className="nav">
                <Route path='/:author' component={Nav} />
              </div>

              <div className="book">
                <Route path='/:author' component={PageDisplay} />
              </div>
            </div>

          </div>
        </React.Fragment>
      </Router>
    )
  }
}

// class App extends React.Component {
//   render () {
//     return (
//       <Router>
//         <React.Fragment>
//           <div className="content">
//             <div className="nav">
//               <Route path='/' component={Nav} />
//             </div>
//             <Route exact path= '/' component={Home} />
//             <div className="book">
//               <Route path='/:author' component={PageDisplay} />
//             </div>
//           </div>
//         </React.Fragment>
//       </Router>
//     )
//   }
// }
export default App
