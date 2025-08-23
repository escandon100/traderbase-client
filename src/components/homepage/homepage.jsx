import React from 'react'
import Reason1 from '../reason1/reason1'
import Plans from '../plans/plans'
import Reason2 from '../reason2/reason2'
import "./homepage.scss"
import GlobalMarkets from '../globalMarkets/globalMarkets'
import TradingSteps from '../tradingSteps/tradingSteps'
import Download from '../download/download'
import MainPage from '../mainPage/mainPage'
import Chart from '../chart/chart'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div
        style={{
          height: "38px",
          backgroundColor: "#1D2330",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "none",
          textAlign: "right",
          lineHeight: "14px",
          fontSize: "12px",
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #262B38",
          padding: "0px",
          margin: "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "40px",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=no"
            width="100%"
            height="36px"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            style={{
              border: "0",
              margin: "0",
              padding: "0",
            }}
            title="Coinlib Prices"
          ></iframe>
        </div>
      </div>
       <MainPage/>
        <Reason1/>
        <Plans/>
        <GlobalMarkets/>
        <Download />
        <TradingSteps/>
        <Chart/>
        <Reason2 />
      
    </div>
  )
}

export default Homepage
