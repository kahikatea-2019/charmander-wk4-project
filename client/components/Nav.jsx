import React from 'react'
// import { Link } from 'react-router-dom'
import book from '../../data/book'

class Nav extends React.Component {

humanChapters = book.humans.map(item => {
  return <li key={item.chapterTitle}>{item.chapterTitle}</li>
})

betterThanHumanChapters = book.betterThanHumans.map(item => {
  return <li key={item.chapterTitle}>{item.chapterTitle}</li>
})

render () {
  return (
    <div className="nav">
      <h1>Nav</h1>
      <h3>Humans</h3>
      <ul>
        {this.humanChapters}
      </ul>
      <h3>Better Than Humans</h3>
      <ul>
        {this.betterThanHumanChapters}
      </ul>
    </div>
  )
}
}

export default Nav



// Want to map through the array 'humans' and the array
// 'betterThanHumans' and then return the value for
// chapterTitle

// book.humans = [ {}, {}. {}, ]
