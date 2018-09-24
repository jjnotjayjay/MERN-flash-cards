import React from 'react'

export default function ViewCards(props) {
  return (
    <div>
      {props.cards.map((card, index) => {
        return (
          <div key={index}>
            <h6>{card.topic}</h6>
            <h5>{card.sideA}</h5>
            <p>{card.sideB}</p>
          </div>
        )
      })}
    </div>
  )
}
