import React from 'react'

function NoCards(props) {
  return (
    <div className="col-4 offset-md-4 text-center border rounded mt-2 p-3 no-card-bg">
      <h4>No cards created!</h4>
      <button className="btn btn-primary mt-2" onClick={() => props.updateView('create')}>Create a Flashcard</button>
    </div>
  )
}

function RenderCards(props) {
  return (
    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
      {props.cards.map((card, index) => {
        return (
          <div className="card mb-4 mt-2 card-height shadow" key={index}>
            <div className="card-body">
              <p className="card-subtitle text-muted text-right font-italic">{card.topic}</p>
              <h4 className="card-title">{card.question}</h4>
              <hr/>
              <p className="card-text text-height">{card.answer}</p>
              <div className="edit-delete-icons">
                <i className="fas fa-times float-right pointer" onClick={() => props.deleteCard(card.id)}></i>
                <i className="fas fa-edit float-right mr-3 pointer" onClick={() => props.updateSelected(card.id)}></i>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ViewCards(props) {
  return (
    <div>
      {!props.cards.length &&
        <NoCards updateView={props.updateView}/>
      }
      {props.cards.length > 0 &&
        <RenderCards cards={props.cards} updateSelected={props.updateSelected} deleteCard={props.deleteCard}/>
      }
    </div>
  )
}
