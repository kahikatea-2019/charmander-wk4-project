import React from 'react'
import book from '../../data/book'

class PageDisplay extends React.Component {
  state = {
    chapterTitle: '',
    imagePath: '',
    description: ''
  }

  componentDidMount () {
    const author = this.props.match.params.author
    console.log(author)

    const bio = book.humans.find(human => human.chapterTitle === author)
    console.log(bio)

    const person = {
      chapterTitle: bio.chapterTitle,
      description: bio.description,
      imagePath: bio.imagePath
    }

    this.setState({
      chapterTitle: person.chapterTitle,
      imagePath: person.imagePath
    })
  }

  // map through routed data

  // return page display data
  showDescription = () => {
    this.setState({
      chapterTitle: this.person.chapterTitle,
      description: this.person.description,
      imagePath: this.person.imagePath
    })
  }

  render () {
    return (
      <React.Fragment>

        <h1>{this.state.chapterTitle}</h1>
        <p>{this.state.description}</p>
        <img src={this.state.imagePath} className="img" onClick={this.showDescription} />
      </React.Fragment>
    )
  }
}

export default PageDisplay
