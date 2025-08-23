import React from 'react'
import "./futuresMarket.scss"

const FuturesMarket = () => {

      return (
        <div className='futuresMarket'>
    
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Bid</th>
                    <th>Ask</th>
                    <th>Change</th>
                </tr>
                <tr>
                    <td>Germany30</td>
                    <td>13409.55</td>
                    <td>13411.25</td>
                    <td className='red'>-0.37%</td>
                </tr>          
                <tr>
                    <td>USA30</td>
                    <td>28507</td>
                    <td>28510</td>
                    <td className='green'>0%</td>
                </tr>
                <tr>
                    <td>NAS100</td>
                    <td>8301</td>
                    <td>8302</td>
                    <td className='green'>0%</td>
                </tr>
                <tr>
                    <td>S&P500</td>
                    <td>2798</td>
                    <td>2798.5</td>
                    <td className='green'>0%</td>
                 </tr>      
                <tr>
                    <td>DollarIndex</td>
                    <td>96.955</td>
                    <td>96.97	</td>
                    <td className='green'>0%</td>
                 </tr>
          </tbody>
        </table>
    
    </div>
      )
    }
    
    

export default FuturesMarket
