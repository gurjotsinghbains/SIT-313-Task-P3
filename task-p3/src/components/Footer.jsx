function Footer() {
  return (
    <div id="contact" className="footer">

      <div className="newsletter">
        <p>Sign up for our daily insider</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-columns">
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Stay connected</h4>
          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>DEV@Deakin 2026</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>

    </div>
  )
}

export default Footer