import React from 'react'
import Name from '../components/Name';
import "../style/Header.css";
function Header(){
  return (
    <div className='container-fluid fixed-header'>
      <div className="row">
        <div className='col-lg-4'>
          <Name/>
        </div>
        {/* <div className='col-lg-4'>
          <Navigation/>
        </div> */}
        {/* <div className='col-lg-4'>
          <Contact/>
        </div> */}
      </div>
    </div>
  )
}

export default Header;