import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './nav-bar.js'
import ViewCards from './view-cards.js'
import CardForm from './card-form.js'
import PracticeCards from './practice-cards.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    const initialCards = JSON.parse(localStorage.getItem('flashcards')) || []
    const initialId = JSON.parse(localStorage.getItem('nextId')) || 1
    this.state = {
      view: 'view',
      flashcards: initialCards,
      selectedCard: null,
      nextId: initialId
    }
    this.onUnload = this.onUnload.bind(this)
    this.updateView = this.updateView.bind(this)
    this.addCard = this.addCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload)
  }

  onUnload() {
    localStorage.setItem('flashcards', JSON.stringify(this.state.flashcards))
    localStorage.setItem('nextId', JSON.stringify(this.state.nextId))
  }

  addCard(card) {
    const currentCards = [...this.state.flashcards]
    if (this.state.selectedCard === null) {
      const id = this.state.nextId
      currentCards.push(Object.assign({}, card, { id: id }))
      this.setState({
        nextId: id + 1
      })
    }
    else {
      const cardToUpdate = currentCards.find(card => card.id === this.state.selectedCard)
      cardToUpdate.topic = card.topic
      cardToUpdate.sideA = card.sideA
      cardToUpdate.sideB = card.sideB
    }
    this.setState({
      flashcards: currentCards,
      selectedCard: null
    })
  }

  deleteCard(id) {
    const currentCards = [...this.state.flashcards]
    const indexToDelete = currentCards.findIndex(card => card.id === id)
    currentCards.splice(indexToDelete, 1)
    this.setState({
      flashcards: currentCards
    })
  }

  updateSelected(id) {
    this.setState({
      selectedCard: id,
      view: 'create'
    })
  }

  updateView(view) {
    if (this.state.flashcards.length === 0 && view === 'practice') {
      this.setState({
        view: 'view'
      })
      return
    }
    this.setState({
      view: view,
      selectedCard: null
    })
  }

  render() {
    const { view, flashcards, selectedCard } = this.state
    const cardToUpdate = flashcards.find(card => card.id === selectedCard)
    return (
      <div>
        <NavBar updateView={this.updateView}/>
        {view === 'view' &&
          <ViewCards cards={flashcards} updateView={this.updateView} updateSelected={this.updateSelected} deleteCard={this.deleteCard}/>}
        {view === 'create' &&
          <CardForm selected={cardToUpdate} addCard={this.addCard}/>}
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
