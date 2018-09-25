import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbar.js'
import ViewCards from './viewcards.js'
import CreateCard from './createcard.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    const initialCards = JSON.parse(localStorage.getItem('flashcards')) || []
    this.state = {
      view: 'view',
      flashcards: initialCards
    }
    this.updateView = this.updateView.bind(this)
    this.addCard = this.addCard.bind(this)
  }

  addCard(card) {
    const currentCards = [...this.state.flashcards]
    currentCards.push(card)
    this.setState({
      flashcards: currentCards
    })
    localStorage.setItem('flashcards', JSON.stringify(currentCards))
  }

  updateView(view) {
    this.setState({
      view: view
    })
  }

  render() {
    const { view, flashcards } = this.state
    return (
      <div>
        <NavBar updateView={this.updateView}/>
        {view === 'view' &&
          <ViewCards cards={flashcards} updateView={this.updateView}/>}
        {view === 'create' &&
          <CreateCard addCard={this.addCard}/>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
