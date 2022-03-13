import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <h3>Address:</h3>
          <p>dinidi Maneesha,<br></br>
          Wimasuma, <br></br>
             Waliwa,<br></br>
             Morawaka </p>
             <h3>Contact Number:</h3>
             <p>0763911405 / 0714534950</p>
             <h3>Email Address:</h3>

          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            <a href="www.linkedin.com/in/dinidi-maneesha-890953233">Dinidi Maneesha</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
