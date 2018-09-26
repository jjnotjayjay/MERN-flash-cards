import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbar.js'
import ViewCards from './viewcards.js'
import CreateCard from './createcard.js'
import PracticeCards from './practicecards.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    const initialCards = JSON.parse(localStorage.getItem('flashcards')) || []
    this.state = {
      view: 'view',
      flashcards: initialCards,
      selectedCard: null
    }
    this.updateView = this.updateView.bind(this)
    this.addCard = this.addCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  addCard(card) {
    const currentCards = [...this.state.flashcards]
    if (this.state.selectedCard === null) {
      currentCards.push(card)
    }
    else {
      currentCards[this.state.selectedCard] = card
    }
    this.setState({
      flashcards: currentCards,
      selectedCard: null
    })
    localStorage.setItem('flashcards', JSON.stringify(currentCards))
  }

  deleteCard(index) {
    const currentCards = [...this.state.flashcards]
    currentCards.splice(index, 1)
    this.setState({
      flashcards: currentCards
    })
    localStorage.setItem('flashcards', JSON.stringify(currentCards))
  }

  updateSelected(index) {
    this.setState({
      selectedCard: index,
      view: 'create'
    })
  }

  updateView(view) {
    this.setState({
      view: view,
      selectedCard: null
    })
  }

  render() {
    const { view, flashcards, selectedCard } = this.state
    return (
      <div>
        <NavBar updateView={this.updateView}/>
        {view === 'view' &&
          <ViewCards cards={flashcards} updateView={this.updateView} updateSelected={this.updateSelected} deleteCard={this.deleteCard}/>}
        {view === 'create' &&
          <CreateCard selected={flashcards[selectedCard]} addCard={this.addCard}/>}
        {view === 'practice' &&
          <PracticeCards cards={flashcards}/>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
