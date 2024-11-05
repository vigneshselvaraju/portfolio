import "../style/Footer.css"

function Footer(){
    return(
        <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact me at: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        </div>
        <div className="social-media">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add other social links as needed */}
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="copyright">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}
export default Footer;