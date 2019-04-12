// import React from 'react'
// import { Route } from 'react-router-dom'

// import Nav from './Nav'
// import Home from './Home'


// const App = () => {
//   return (
//     <React.Fragment>
//       <h1 className="heading">Navigating the taxonomic ranks!</h1>
//       <div className="container">
//       <div className="nav">
//       <Route path="/" component={Nav}/>
//       </div>
 
//         <div className="content">
//           <Route exact path="/" component={Home}/>
         

//         </div>

//       </div>
//     </React.Fragment>

//   )
// }

// export default App



import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home.jsx'
import ContentDisplay from './ContentDisplay.jsx'

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
