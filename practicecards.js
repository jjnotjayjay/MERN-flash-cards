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

  render() {
    const { currentCard, showAnswer } = this.state
    const { cards } = this.props
    let showAnswerIconClass = 'fas fa-chevron-circle-right'
    if (showAnswer) {
      showAnswerIconClass += ' rotate'
    }
    return (
      <div className="col-6 offset-md-3 vertical-center">
        <div className="card">
          <div className="card-body">
            <p className="text-muted card-subtitle text-right font-italic">{cards[currentCard].topic}</p>
            <h4 className="card-title text-center mt-1">{cards[currentCard].sideA}</h4>
            <div onClick={this.toggleAnswer}>
              <i className={showAnswerIconClass}></i>
              <span className="font-italic ml-2 show-answer">Show answer</span>
            </div>
            <p className={showAnswer ? 'mt-2 text-center' : 'hidden'}>{cards[currentCard].sideB}</p>
          </div>
        </div>
      </div>
    )
  }
}
