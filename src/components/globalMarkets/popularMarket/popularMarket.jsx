import React from 'react'
import "./popularMarket.scss"

const PopularMarket = () => {


  return (

    <div className='popularMarket'>

        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Bid</th>
              <th>Ask</th>
              <th>Change</th>
           </tr>
            <tr>
                <td>BTC/USD</td>
                <td>8812.66</td>
                <td>8842.66</td>
                <td className='green'>1.02%</td>
            </tr>          
            <tr>
                <td>EUR/USD</td>
                <td>1.11505</td>
                <td>1.1152</td>
                <td className='green'>0.22%</td>
            </tr>
          
          
            <tr>
                <td>GBP/USD</td>
                <td>1.30291</td>
                <td>1.30308</td>
                <td className='green'>0.08%</td>
            </tr>
          
      
        
          <tr>
              <td>UK100</td>
              <td>7628.95</td>
              <td>7631.65	</td>
              <td className='red'>-0.03%</td>
          </tr>

      
      
            <tr>
                <td>Crude OIL</td>
                <td>57.95</td>
                <td>58.01</td>
                <td className='red'>-0.38%</td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

export default PopularMarket
