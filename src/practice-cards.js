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

  getPositiveModForCardIndex(x, n) {
    return (x % n + n) % n
  }

  render() {
    const { currentCard, showAnswer } = this.state
    const { cards } = this.props
    const currentIndex = this.getPositiveModForCardIndex(currentCard, cards.length)
    const cardToRender = cards[currentIndex]
    let showAnswerIconClass = 'fas fa-chevron-circle-right show-answer-icon pointer'
    if (showAnswer) {
      showAnswerIconClass += ' rotate'
    }
    const percentageComplete = currentIndex / cards.length * 100
    return (
      <div className="col-6 offset-md-3 d-flex flex-wrap align-content-center full-height">
        <i className="fas fa-chevron-left fa-2x left-arrow pointer" onClick={() => this.changeCard('left')}></i>
        <div className="card w-100">
          <div className="card-body">
            <p className="text-muted card-subtitle text-right font-italic">{cardToRender.topic}</p>
            <h4 className="card-title text-center mt-1">{cardToRender.sideA}</h4>
            <div onClick={this.toggleAnswer}>
              <i className={showAnswerIconClass}></i>
              <span className="font-italic ml-2 show-answer-text">Show answer</span>
            </div>
            <p className={showAnswer ? 'mt-2 text-center' : 'hidden'}>{cardToRender.sideB}</p>
          </div>
        </div>
        <i className="fas fa-chevron-right fa-2x pointer right-arrow" onClick={() => this.changeCard('right')}></i>
        <div className="progress w-100 mt-3">
          <div className="progress-bar" role="progressbar" style={{width: percentageComplete + '%'}}></div>
        </div>
      </div>
    )
  }
}
