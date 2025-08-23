import React from "react"
import "./download.scss"

const Download = () => {

    return (
        <div className="download">

            <div className="left">

                <h1>Trader Base FX</h1>
                <div className="ecnButton">
                 <button>ECN</button>


                </div>
                <p>
                    Developed in 2000 by MetaQuotes Software Corporation, the Trader Base FX trading platform fast became one of the most popular trading platforms in the world.
                    The MT5 platform is dynamic and user- friendly, providing traders with a powerful range of features and tools.
                </p>

                <div className="downloadButtons">
                    <div className="desktop">
                     <img src="mp-platform-icon2.svg" alt="" />
                     <p>Desktop</p>
                    </div>
                    <div className="mobile">
                      <img src="mp-platform-icon3.svg" alt="" />
                      <div className="mobileText">
                        <p>Android</p>
                        <p>iOS</p>
                      </div>
                    </div>
                </div>
                
            </div>

            <div className="right">
                <img src="mp-platform-img11.png" alt="" />
            </div>

        </div>

    )
}

export default Download