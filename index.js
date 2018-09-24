import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbar.js'
import NoCards from './nocards.js'
import ViewCards from './viewcards.js'
import CreateCard from './createcard.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view',
      flashcards: []
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
        {view === 'view' && !flashcards.length &&
          <NoCards />}
        {view === 'view' && flashcards.length > 0 &&
          <ViewCards cards={flashcards}/>}
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
