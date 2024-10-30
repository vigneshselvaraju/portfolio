import React from 'react';
import "../style/Card.css";
import emoji from "../Assets/emoji.png";
function Card(){
    return(
        <div className='card'>
            <section>
                <img src={emoji} width="200" height="200"></img>
            </section>
            <p>
                I am Vignesh, a full stack developer passionate about develpoing web applications, microservices and cloud based solutions.
            </p>
        </div>
    )
}
export default Card;