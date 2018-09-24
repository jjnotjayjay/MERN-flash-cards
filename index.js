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

  addCard(card) {
    const currentCards = [...this.state.flashcards]
    currentCards.push(card)
    this.setState({
      flashcards: currentCards
    })
  }

  render() {
    const { view } = this.state
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
