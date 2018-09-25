import React from 'react'

export default function ViewCards(props) {
  return (
    <div>
      {!props.cards.length &&
        <div className="col-4 offset-md-4 text-center border rounded mt-2 p-3">
          <h4>No cards created!</h4>
          <button className="btn btn-primary mt-2" onClick={() => props.updateView('create')}>Create a Flashcard</button>
        </div>
      }
      {props.cards.length > 0 &&
        <div className="col-6 offset-md-3">
          {props.cards.map((card, index) => {
            return (
              <div className="card mt-2" key={index}>
                <div className="card-body">
                  <p className="card-subtitle text-muted text-right font-italic">{card.topic}</p>
                  <h4 className="card-title text-center">{card.sideA}</h4>
                  <hr/>
                  <p className="card-text text-center">{card.sideB}</p>
                  <i className="fas fa-times float-right"></i>
                  <i className="fas fa-edit float-right mr-2" onClick={() => props.updateSelected(index)}></i>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
