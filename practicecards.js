import React from 'react'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0
    }
  }

  render() {
    const { currentCard } = this.state
    const { cards } = this.props
    return (
      <div>{cards[currentCard].topic}</div>
    )
  }
}
