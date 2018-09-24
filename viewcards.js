import React from 'react'

export default function ViewCards(props) {
  return (
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
  )
}
