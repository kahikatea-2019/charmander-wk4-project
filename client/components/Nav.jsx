import React from 'react' 

import coolBios from '../../data/book'

class Nav extends React.component {
  bookChapters = Object.keys(coolBios).map(item => {
    return <li key={item}>{item}</li>
  })

render () {
  return (
    <div className='nav'>
      <h2>Chapters</h2>
      <ul>
        {this.bookChapters}
      </ul>
    </div>

  )
}
}

export default Nav
