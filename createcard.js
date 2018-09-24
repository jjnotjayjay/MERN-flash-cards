import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-4 offset-md-4 pt-3">
        <h4 className="text-center">Create a Flash Card</h4>
        <div className="form-group">
          <label for="topicInput">Topic: </label>
          <input className="form-control" id="topicInput" type="text"></input>
        </div>
        <div className="form-group">
          <label for="sideAInput">Side A: </label>
          <input className="form-control" id="sideAInput" type="text"></input>
        </div>
        <div className="form-group">
          <label for="sideBInput">Side B: </label>
          <textarea className="form-control" id="sideBInput" type="text" rows="4"></textarea>
        </div>
        <button className="btn btn-primary" id="submitCard" type="submit">Create Card</button>
      </div>
    )
  }
}
