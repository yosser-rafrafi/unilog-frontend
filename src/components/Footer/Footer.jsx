import react from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="footer-logo">
                <img src="path/to/your/logo.png" alt="Logo" />
              </div>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer