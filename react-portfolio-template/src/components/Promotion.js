import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <h2>{data.promotionHeading2}</h2>
          <p>{data.promotionPara}</p>
          <h2>{data.promotionHeading3}</h2>
          <p>{data.promotionPara2}</p>
          <h2>{data.promotionHeading4}</h2>
          <p>{data.promotionPara3}</p>
          <h2>{data.promotionHeading5}</h2>
          <p>{data.promotionPara4}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
