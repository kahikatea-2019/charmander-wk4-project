import React from 'react'
import Nav from './Nav.jsx'
import PageDisplay from './PageDisplay.jsx'

class ContentDisplay extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1> wanna see a ccool book </h1>
        <div>
          <Nav />
          <PageDisplay />
        </div>
      </React.Fragment>

    )
  }
}

export default ContentDisplay
