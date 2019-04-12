import React from 'react'
import { Link } from 'react-router-dom'

import book from '../../data/book'

class Nav extends React.component {
bookChapters = Object.keys(book).map(book => {
  return <li key = {book}><Link to={`/index/${book}`}>{book}</Link></li>
})
render () {
  return (
    <div className="nav">
      <h2>Chapters</h2>
      <ul>
        {this.bookChapters}
      </ul>
    </div>

  )
}
}

export default Nav
