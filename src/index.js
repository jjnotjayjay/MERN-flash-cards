import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './nav-bar.js'
import ViewCards from './view-cards.js'
import CardForm from './card-form.js'
import PracticeCards from './practice-cards.js'
import uuid from 'uuid/v4'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view',
      flashcards: [],
      selectedCard: null
    }
    this.updateView = this.updateView.bind(this)
    this.addCard = this.addCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  componentDidMount() {
    fetch('/cards')
      .then(res => res.json())
      .then(cards => this.setState({ flashcards: cards }))
      .catch(err => console.log(err))
  }

  addCard(card) {
    const currentCards = [...this.state.flashcards]
    if (this.state.selectedCard === null) {
      const req = {
        method: 'POST',
        body: JSON.stringify(Object.assign({}, card, { id: uuid() })),
        headers: { 'Content-Type': 'application/json' }
      }
      fetch('/cards', req)
        .then(res => res.json())
        .then(cardToAdd => {
          currentCards.push(cardToAdd)
          this.setState({
            flashcards: currentCards,
            selectedCard: null
          })
        })
    }
    else {
      const cardToUpdate = currentCards.find(card => card.id === this.state.selectedCard)
      cardToUpdate.topic = card.topic
      cardToUpdate.question = card.question
      cardToUpdate.answer = card.answer
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
      this.setState({ view: 'view' })
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
