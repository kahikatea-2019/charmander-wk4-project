import React from 'react'
import book from '../../data/book'

// const chapter = this.props.match.params.book

// chapterdata = book[this.chapter]
const Lisa = {
  id: 1, chapterTitle: 'Lisa Liukas', imagePath: 'https://flockler.com/thumbs/sites/3187/linda-liukas-potretti-45dd9f59-d304-41d6-96f1-b6538cb2944f_s1260x0_q80_noupscale.jpg', description: "Okay I’m Rambo I ramshack, I’m next to that cheese like rat traps, On top of that green like grass ass, That’s over y'all head like snapbacks, I get it where I fit in, put up then I put in, Tryna find an ass I can put my fucking foot in, Run this shit no I run this shit, Don’t give one fuck bitch I done this shit, I did what I say I did, Did not fabricate one bit, I have been the fucking realest since my exit near the clit', That’s where I was born fuck what you on, All about me bitch fuck what you doin', Round of applause bitches happy with some garbage, Show my whole fucking ass like a fat bitch in chaps, But I’ll be running that shit like a motherfuckin' tracker, Like I run on sense like a motherfuckin' chopper, Like a cheetah in the jungle but I’m motherfucking faster, Like a pre-teen boy in the church with a pastor, Hold up I’m not serious I’m just playin' psych, Fuck your opinion bitch I mean it when I’m sayin' that, Money and more money is the only shit I’m after, You can cut the fake shit, I’m not a motherfuckin' actor"
}

class PageDisplay extends React.Component {
  // set state div name /descr /image
  state = {
    chapterTitle: Lisa.chapterTitle,
    imagePath: Lisa.imagePath
  }

  // map through routed data

  // return page display data
  showDescription = () => {
    this.setState({
      chapterTitle: Lisa.chapterTitle,
      description: Lisa.description,
      imagePath: Lisa.imagePath
    }
    )
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
