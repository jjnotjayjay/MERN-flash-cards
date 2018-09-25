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
                  <p className="card-subtitle">{card.topic}</p>
                  <h5 className="card-title text-center">{card.sideA}</h5>
                  <hr/>
                  <p className="card-text">{card.sideB}</p>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}
