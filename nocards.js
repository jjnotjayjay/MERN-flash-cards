import React from 'react'

export default function NoCards(props) {
  return (
    <div className="col-4 offset-md-4 text-center border rounded mt-2 p-3">
      <h4>No cards created!</h4>
      <button className="btn btn-primary mt-2" onClick={() => props.updateView('create')}>Create a Flashcard</button>
    </div>
  )
}
