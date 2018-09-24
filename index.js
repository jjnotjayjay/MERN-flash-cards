import React from 'react'
import ReactDOM from 'react-dom'
import CreateCard from './createcard.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'create',
      flashcards: []
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard(topic, sideA, sideB) {
    const currentCards = [...this.state.flashcards]
    currentCards.push({
      topic: topic,
      sideA: sideA,
      sideB: sideB
    })
    this.setState({
      flashcards: currentCards
    })
  }

  render() {
    const { view, flashcards } = this.state
    console.log(flashcards)
    return (
      view === 'create' &&
        <CreateCard addCard={this.addCard}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
