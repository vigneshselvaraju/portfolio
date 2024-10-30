import React from 'react'
import "../style/Navigation.css"
function Navigation() {
  return (
    <div className='navigation'>
      <div className='navigation-inner'>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active custom-link" >Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-link" >About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link custom-link" >Links</a>
        </li>       
      </ul>
      </div>
    </div>
  )
}

export default Navigation