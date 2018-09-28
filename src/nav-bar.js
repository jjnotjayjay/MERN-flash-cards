import React from 'react'

export default function NavBar(props) {
  return (
    <div className="navbar bg-light">
      <div className="nav-item">
        <span className="nav-link nav-pointer" onClick={() => props.updateView('view')}>View Cards</span>
      </div>
      <div className="nav-item">
        <span className="nav-link nav-pointer" onClick={() => props.updateView('create')}>Create Cards</span>
      </div>
      <div className="nav-item mr-auto">
        <span className="nav-link nav-pointer" onClick={() => props.updateView('practice')}>Practice</span>
      </div>
    </div>
  )
}
