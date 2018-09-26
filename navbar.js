import React from 'react'

export default function NavBar(props) {
  return (
    <div className="nav">
      <span className="nav-link" onClick={() => props.updateView('view')}>View Cards</span>
      <span className="nav-link" onClick={() => props.updateView('create')}>Create Cards</span>
      <span className="nav-link">Practice</span>
    </div>
  )
}
