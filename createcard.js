import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Create a Flash Card</h4>
        <div>
          <label for="topicInput">Topic: </label>
          <input type="text" id="topicInput"></input>
        </div>
        <div>
          <label for="sideAInput">Side A: </label>
          <input type="text" id="sideAInput"></input>
        </div>
        <div>
          <label for="sideBInput">Side B: </label>
          <textarea type="text" id="sideBInput"></textarea>
        </div>
        <button type="submit" id="submitCard">Create Card</button>
      </div>
    )
  }
}
