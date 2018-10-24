import React from 'react'

export default class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({ id: '', topic: '', question: '', answer: '' }, props.selected, { confirmationMessage: null })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearConfirmationMessage = this.clearConfirmationMessage.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({
        topic: '',
        question: '',
        answer: ''
      })
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    const { id, topic, question, answer } = this.state
    if (topic && question && answer) {
      this.props.saveCard({ id, topic, question, answer })
      const confirmationMessageContent = this.props.selected ? 'Flashcard saved.' : 'Flashcard created.'
      this.setState({
        topic: '',
        question: '',
        answer: '',
        confirmationMessage: confirmationMessageContent
      })
      window.setTimeout(this.clearConfirmationMessage, 3000)
    }
    e.preventDefault()
  }

  clearConfirmationMessage() {
    this.setState({ confirmationMessage: null })
  }

  render() {
    const { topic, question, answer, confirmationMessage } = this.state
    return (
      <form className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-2 border rounded card-body shadow form-bg" onSubmit={this.handleSubmit}>
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
            name="question"
            type="text"
            value={question}
            onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="side-b">Side B: </label>
          <textarea
            className="form-control"
            id="side-b"
            name="answer"
            type="text"
            rows="4"
            value={answer}
            onChange={this.handleChange}>
          </textarea>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="submit">
            {this.props.selected ? 'Save Card' : 'Create Card'}
          </button>
          {confirmationMessage &&
            <p className="mt-2 mb-0">{confirmationMessage}</p>}
        </div>
      </form>
    )
  }
}
