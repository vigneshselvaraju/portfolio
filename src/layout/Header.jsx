import React from 'react'
import Name from '../components/Name';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import "../style/Header.css";
function Header(){
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-4'>
          <Name/>
        </div>
        <div className='col-4'>
          <Navigation/>
        </div>
        <div className='col-4'>
          <Contact/>
        </div>
      </div>
    </div>
  )
}

export default Header;