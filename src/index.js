import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './nav-bar.js'
import ViewCards from './view-cards.js'
import CardForm from './card-form.js'
import PracticeCards from './practice-cards.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view',
      flashcards: [],
      selectedCard: null
    }
    this.updateView = this.updateView.bind(this)
    this.saveCard = this.saveCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  componentDidMount() {
    fetch('/cards')
      .then(res => res.json())
      .then(cards => this.setState({ flashcards: cards }))
      .catch(err => console.log(err))
  }

  saveCard(card) {
    const { selectedCard, flashcards } = this.state
    const url = selectedCard ? '/cards/' + card.id : '/cards'
    const req = {
      method: selectedCard ? 'PUT' : 'POST',
      body: JSON.stringify(card),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.json())
      .then(cardResult => {
        const currentCards = [...flashcards]
        if (selectedCard) {
          const indexToUpdate = currentCards.findIndex(card => card.id === selectedCard)
          currentCards.splice(indexToUpdate, 1, cardResult)
        }
        else {
          currentCards.push(cardResult)
        }
        this.setState({
          flashcards: currentCards,
          selectedCard: null
        })
      })
      .catch(err => console.log(err))
  }

  deleteCard(id) {
    const req = { method: 'DELETE' }
    fetch('/cards/' + id, req)
      .then(res => {
        if (res.status === 204) {
          const currentCards = [...this.state.flashcards]
          const indexToDelete = currentCards.findIndex(card => card.id === id)
          currentCards.splice(indexToDelete, 1)
          this.setState({ flashcards: currentCards })
        }
      })
      .catch(err => console.log(err))
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
          <CardForm selected={cardToUpdate} saveCard={this.saveCard}/>}
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
