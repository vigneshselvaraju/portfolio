import React,{useRef} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from '@emailjs/browser';
import "../style/Home.css"
import emoji from "../Assets/emoji.png";
import "../style/Card.css";
const ContactPage = () => {
    const form = useRef();
  
    const sendEmail=(e)=>{
      e.preventDefault();
      emailjs
        .sendForm('service_q30pstq', 'template_rxqn8po', form.current, {
          publicKey: 'Ck3s-RhTgY84VaVX4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
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
                <form ref={form} onSubmit={sendEmail}>
                  <div style={{ display: 'flex', gap: '10px', margin: "15px 15px 15px 15px"}}>
                    <div class="form-floating mb-3" style={{ flex: 1 }}>
                      <input type="text" class="form-control" name="name" id="name" placeholder="abc"/>
                      <label for="name">YOUR NAME</label>
                    </div>
                    <div class="form-floating" style={{ flex: 1 }}>
                      <input type="tel" class="form-control" name="phoneNumber" id="phoneNumber" placeholder="123"/>
                      <label for="phoneNumber">PHONE NUMBER</label>
                    </div>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com"/>
                      <label for="email">YOUR EMAIL</label>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="abc"/>
                      <label for="subject">SUBJECT</label>
                  </div>
                  <div class="form-floating mb-3" style={{margin: "15px 15px 15px 15px"}}>
                      <textarea type="text" class="form-control" name="message" id="message" placeholder="abc" style={{height: '5cm'}}/>
                      <label for="message">YOUR MESSAGE</label>
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
  )
}

export default ContactPage