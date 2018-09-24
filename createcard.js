import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: '',
      sideA: '',
      sideB: ''
    }
  }

  handleChange(e, id) {
    this.setState({
      [id]: e.target.value
    })
  }

  render() {
    const { topic, sideA, sideB } = this.state
    return (
      <div className="col-4 offset-md-4 mt-2 p-3 border rounded">
        <h4 className="text-center">Create a Flash Card</h4>
        <div className="form-group">
          <label>Topic: </label>
          <input
            className="form-control"
            id="topicInput"
            type="text"
            value={topic}
            onChange={(e) => this.handleChange(e, 'topic')}>
          </input>
        </div>
        <div className="form-group">
          <label>Side A: </label>
          <input
            className="form-control"
            id="sideAInput"
            type="text"
            value={sideA}
            onChange={(e) => this.handleChange(e, 'sideA')}>
          </input>
        </div>
        <div className="form-group">
          <label>Side B: </label>
          <textarea
            className="form-control"
            id="sideBInput"
            type="text"
            rows="4"
            value={sideB}
            onChange={(e) => this.handleChange(e, 'sideB')}>
          </textarea>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            id="submitCard"
            type="submit"
            onClick={() => this.props.addCard(topic, sideA, sideB)}>
            Create Card
          </button>
        </div>
      </div>
    )
  }
}
