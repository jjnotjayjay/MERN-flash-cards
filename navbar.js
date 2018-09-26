import React from 'react'

export default function NavBar(props) {
  return (
    <div className="nav">
      <span className="nav-link nav-pointer" onClick={() => props.updateView('view')}>View Cards</span>
      <span className="nav-link nav-pointer" onClick={() => props.updateView('create')}>Create Cards</span>
      <span className="nav-link nav-pointer" onClick={() => props.updateView('practice')}>Practice</span>
    </div>
  )
}
