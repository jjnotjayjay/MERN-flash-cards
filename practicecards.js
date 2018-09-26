import React from 'react'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      showAnswer: false
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  toggleAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    })
  }

  changeCard(direction) {
    let indexToUpdate = this.state.currentCard
    if (direction === 'left') {
      indexToUpdate--
    }
    if (direction === 'right') {
      indexToUpdate++
    }
    this.setState({
      currentCard: indexToUpdate,
      showAnswer: false
    })
  }

  mod(x, n) {
    return (x % n + n) % n
  }

  render() {
    const { currentCard, showAnswer } = this.state
    const { cards } = this.props
    const currentIndex = this.mod(currentCard, cards.length)
    let showAnswerIconClass = 'fas fa-chevron-circle-right'
    if (showAnswer) {
      showAnswerIconClass += ' rotate'
    }
    return (
      <div className="col-6 offset-md-3 vertical-center">
        <i className="fas fa-chevron-left fa-2x left-arrow" onClick={() => this.changeCard('left')}></i>
        <div className="card">
          <div className="card-body">
            <p className="text-muted card-subtitle text-right font-italic">{cards[currentIndex].topic}</p>
            <h4 className="card-title text-center mt-1">{cards[currentIndex].sideA}</h4>
            <div onClick={this.toggleAnswer}>
              <i className={showAnswerIconClass}></i>
              <span className="font-italic ml-2 show-answer">Show answer</span>
            </div>
            <p className={showAnswer ? 'mt-2 text-center' : 'hidden'}>{cards[currentIndex].sideB}</p>
          </div>
        </div>
        <i className="fas fa-chevron-right fa-2x right-arrow" onClick={() => this.changeCard('right')}></i>
      </div>
    )
  }
}
