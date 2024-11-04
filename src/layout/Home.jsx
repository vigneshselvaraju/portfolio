import React,{useRef} from 'react'
import Header from './Header'
import "../style/Home.css"
import emoji from "../Assets/emoji.png";
import github from "../Assets/github.png";
import facebook from "../Assets/facebook.jpg";
import instagram from "../Assets/instagram.png";
import linked from "../Assets/linkedin.png"
import "../style/Card.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactPage from './ContactPage';
function Home(){
  return (
    <div className='home'>
        <Header/>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 mt-5'>
              <div className='row'>
                <div className='col-4 flex-container'>
                  <img src={emoji} width="350" height="350" ></img>               
                </div>
                <div className='col-8 content'>
                  <p style={{fontSize:"30px",marginTop:"50px",fontWeight:"700"}}>Hello! I'm</p>
                  <p style={{color:"#ec7b5c",fontWeight:"700",fontSize: "70px"}}>Vignesh Selvaraju</p>
                  <p style={{fontWeight:"500",fontSize: "25px"}}>
                  <span style={{fontWeight:"700",fontSize: "33px"}}>full stack developer</span>, passionate about develpoing web applications, microservices and cloud based solutions.
                  </p>
                  <div className='social-media'>
                    <div className='social-media-card'>
                      <img src={linked} width="35" height="35" ></img>
                    </div>
                    <div className='social-media-card'>
                      <img src={github} width="35" height="35"></img>
                    </div>
                    <div className='social-media-card'>
                      <img src={instagram } width="35" height="35"></img>
                    </div>
                    <div className='social-media-card'>
                      <img src={facebook} width="35" height="35" ></img>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
          </div>
        </div>
        {/* <ContactPage/> */}
    </div>
  )
}

export default Home;
