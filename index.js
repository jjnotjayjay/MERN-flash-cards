import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbar.js'
import CreateCard from './createcard.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'create',
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
    const { view } = this.state
    return (
      <div>
        <NavBar updateView={this.updateView}/>
        {view === 'view' &&
          <p>Flashcards will display.</p>}
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
