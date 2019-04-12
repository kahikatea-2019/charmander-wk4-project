import React from 'react'
import PageDisplay from './PageDisplay.jsx'


class ContentDisplay extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1> wanna see a ccool book </h1>
        <div>
          <PageDisplay />
        </div>
      </React.Fragment>
    )
  }
}

export default ContentDisplay

//Before we use routes, 