import React from "react";
import "./chart.scss";

const Chart = () => {
  return (
    <div className="chart">
      <div
        style={{
          height: "530px",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "none",
          borderRadius: "4px",
          textAlign: "right",
          lineHeight: "14px",
          fontSize: "12px",
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #56667F",
          padding: "0px",
          margin: "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "540px",
            padding: "0px",
            margin: "0px",
            width: "100%",
          }}
        >
          <iframe
            src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
            width="100%"
            height="536px"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            style={{
              border: "0",
              margin: "0",
              padding: "0",
              lineHeight: "14px",
            }}
            title="Coinlib Chart"
          ></iframe>
        </div>
     
      </div>
    </div>
  );
};

export default Chart;
