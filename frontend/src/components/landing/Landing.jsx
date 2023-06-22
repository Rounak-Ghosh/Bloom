import React from "react";
import "./Landing.css";
import Mockup from "../../img/hero.png";

function Landing() {
      return (
            <div className="landing">
                  <div className="left">
                        <div className="headline">
                              <h1 className="bloom">BLOOM</h1>
                              <h1>is now live <br />for use !</h1>
                        </div>
                        <button className="cta">Subscribe now</button>
                  </div>
                  <div className="right">
                        <img src={Mockup}/>
                  </div>
            </div>
      );
}

export default Landing;