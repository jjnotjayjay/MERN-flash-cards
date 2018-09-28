import React from 'react'

function NoCards(props) {
  return (
    <div className="col-4 offset-md-4 text-center border rounded mt-2 p-3">
      <h4>No cards created!</h4>
      <button className="btn btn-primary mt-2" onClick={() => props.updateView('create')}>Create a Flashcard</button>
    </div>
  )
}

function RenderCards(props) {
  return (
    <div className="col-6 offset-md-3">
      {props.cards.map((card, index) => {
        return (
          <div className="card mt-2" key={index}>
            <div className="card-body">
              <p className="card-subtitle text-muted text-right font-italic mb-1">{card.topic}</p>
              <h4 className="card-title text-center">{card.sideA}</h4>
              <hr/>
              <p className="card-text text-center">{card.sideB}</p>
              <i className="fas fa-times float-right pointer" onClick={() => props.deleteCard(card.id)}></i>
              <i className="fas fa-edit float-right mr-3 pointer" onClick={() => props.updateSelected(card.id)}></i>
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
