import React from 'react'

export default class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: props.selected ? props.selected.topic : '',
      sideA: props.selected ? props.selected.sideA : '',
      sideB: props.selected ? props.selected.sideB : '',
      confirmationMessage: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearConfirmationMessage = this.clearConfirmationMessage.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({
        topic: '',
        sideA: '',
        sideB: ''
      })
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const { topic, sideA, sideB } = this.state
    if (topic && sideA && sideB) {
      this.props.addCard({
        topic: topic,
        sideA: sideA,
        sideB: sideB
      })
      this.setState({
        topic: '',
        sideA: '',
        sideB: '',
        confirmationMessage: 'Flashcard saved.'
      })
      window.setTimeout(this.clearConfirmationMessage, 3000)
    }
  }

  clearConfirmationMessage() {
    this.setState({
      confirmationMessage: null
    })
  }

  render() {
    const { topic, sideA, sideB, confirmationMessage } = this.state
    return (
      <div className="col-4 offset-md-4 mt-2 p-3 border rounded">
        <h4 className="text-center">Create a Flash Card</h4>
        <div className="form-group">
          <label htmlFor="topic">Topic: </label>
          <input
            className="form-control"
            id="topic"
            name="topic"
            type="text"
            value={topic}
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="side-a">Side A: </label>
          <input
            className="form-control"
            id="side-a"
            name="sideA"
            type="text"
            value={sideA}
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="side-b">Side B: </label>
          <textarea
            className="form-control"
            id="side-b"
            name="sideB"
            type="text"
            rows="4"
            value={sideB}
            onChange={this.handleChange}>
          </textarea>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => this.handleSubmit()}>
            {this.props.selected ? 'Save Card' : 'Create Card'}
          </button>
          {confirmationMessage &&
            <p className="mt-2 mb-0">{confirmationMessage}</p>}
        </div>
      </div>
    )
  }
}
