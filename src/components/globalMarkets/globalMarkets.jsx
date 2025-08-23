import { React , useState } from "react"
import { Link } from "react-router"
import "./globalMarkets.scss"
import PopularMarket from "./popularMarket/popularMarket"
import ForexMarket from "./forexMarket/forexMarket"
import FuturesMarket from "./futuresMarket/futuresMarket"
import IndexesMarket from "./indexesMarket/indexesMarket"



const GlobalMarkets = () => {
  
  const [activeTab, setActiveTab] = useState("popular");

  const renderTab = () => {
    switch (activeTab) {
      case "popular":
        return <PopularMarket />;
      case "forex":
        return <ForexMarket />;
      case "futures":
        return <FuturesMarket />;
      case "indexes":
        return <IndexesMarket />;
      default:
        return null;
    }
  };

  const handlePopular = () => {
    setActiveTab("popular")
  }
  const handleForex = () => {
    setActiveTab("forex")
  }
  const handleFutures = () => {
    setActiveTab("futures")
  }
  const handleIndexes = () => {
    setActiveTab("indexes")
  }
   

  return (
    <div className='globalMarkets'>
        <div className="markets">
            <h1>Trade global markets with Trader Base FX Company Platform</h1>
            <ul>
                <li className={activeTab === "popular"? "active" : ""} onClick={handlePopular}>Popular</li>
                <li className={activeTab === "forex" ? "active" : ""} onClick={handleForex}>Forex</li>
                <li className={activeTab === "futures" ? "active" : ""} onClick={handleFutures}>Futures</li>
                <li className={activeTab === "indexes"? "active" : ""} onClick={handleIndexes}>Indexes</li>
            </ul>

            <div className="main">
              {renderTab()}
            </div>
            <Link className='button' to="/register">OPEN LIVE ACCOUNT</Link>    

        </div>
        <div className="advantages">
            <h1>Trader Base FX Company Platform advantages</h1>
            <div className="advantagesBody">
              <p>More than 70 assets available for trading</p>
              <p>Licensed and Regulated by the MFSA under the MIFID directive</p>
              <p>Leverage up to 1:100 for professional traders </p> 
              <p>Cryptocurrencies available for trading </p>
            </div>
           
        </div>
    </div>
  )
}

export default GlobalMarkets
