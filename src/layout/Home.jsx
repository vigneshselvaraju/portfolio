import React from 'react'
import Header from './Header'
import "../style/Home.css"
import emoji from "../Assets/emoji.png";
import "../style/Card.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Home(){
  return (
    <div className='home'>
        <Header/>
        {/* <div className='container-fluid mt-5'>
          <div className='row'>
            <div className='col-9'>
              <div className='row'>
                <div className='col-4 flex-container'>
                  <img src={emoji} width="300" height="300"></img>               
                </div>
                <div className='col-8 ml-3'>
                  <p className="text">
                    I am <span style={{color:"#ec7b5c",fontWeight:"1000",fontSize: "30px"}}>Vignesh</span>, a full stack developer 
                    passionate about develpoing web applications, microservices and cloud based solutions.
                  </p>
                </div>
              </div>                
            </div>
            <div className='col-3'>
              <div className='card'>
              </div>
            </div>
          </div>
        </div> */}
        <div className='container-fluid mt-5'>
          <div className='row'>
            <div className='col-2'>             
            </div>
            <div className='col-3'>
              <div className='personal-card'>
                <div className='personal-card-image'>
                  <img src={emoji} width="200" height="200"></img>
                </div>     
                <div>
                  <div className='info-name'>
                    <p>Vignesh Selvaraju</p>
                  </div>
                  <div className='info-content'>         
                    <p>I am available for freelance work. Connect with me via and call in to my account</p>
                  </div>
                  <div className='mobile'>
                    <i class="bi bi-telephone-fill" style={{ fontSize: '1.5rem' }}></i>
                    <p style={{margin:"10px"}}>
                      +1 (807) 356-3253
                    </p>
                  </div>
                  <div className='mobile'>
                    <i class="bi bi-envelope-at-fill" style={{ fontSize: '1.5rem' }}></i>  
                    <p style={{margin:"10px"}}>
                     vigneshselvaraju1999@gmail.com
                    </p>
                  </div>               
                </div>           
              </div>
            </div>
            <div className='col-5'>
              <div className='mail-form-card'>
                <div className='container-fluid'>
                <form>
                  <div style={{ display: 'flex', gap: '10px', margin: "15px 15px 15px 15px"}}>
                    <div class="form-floating mb-3" style={{ flex: 1 }}>
                      <input type="text" class="form-control" id="floatingInput" placeholder="abc"/>
                      <label for="floatingInput">YOUR NAME</label>
                    </div>
                    <div class="form-floating" style={{ flex: 1 }}>
                      <input type="tel" class="form-control" id="floatingPassword" placeholder="123"/>
                      <label for="floatingPassword">PHONE NUMBER</label>
                    </div>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label for="floatingInput">YOUR EMAIL</label>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <input type="text" class="form-control" id="floatingInput" placeholder="abc"/>
                      <label for="floatingInput">SUBJECT</label>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <textarea type="text" class="form-control" id="floatingInput" placeholder="abc" style={{height: '5cm'}}/>
                      <label for="floatingInput">YOUR MESSAGE</label>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                    <button type="submit" class="form-control" style={{ padding: '10px 15px', backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                      SEND MESSAGE 
                      <i class="bi bi-arrow-right" style={{ fontSize: '1.5.rem' ,marginLeft:"10px"}}></i>
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
            <div className='col-2'>             
            </div>
          </div>
        </div>
        
    </div>
    
  )
}

export default Home;
