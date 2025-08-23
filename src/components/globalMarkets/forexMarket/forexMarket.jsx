import React from 'react'
import "./forexMarket.scss"

const ForexMarket = () => {


  return (
    <div className='forexMarket'>

    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Bid</th>
          <th>Ask</th>
          <th>Change</th>
        </tr>
        <tr>
            <td>EUR/JPY	</td>
            <td>122.535</td>
            <td>	122.554</td>
            <td className='green'>0.12%</td>
        </tr>          
        <tr>
            <td>AUD/USD</td>
            <td>0.6903</td>
            <td>0.69047</td>
            <td className='red'>-0.01%</td>
        </tr>
      
  
        <tr>
            <td>EUR/USD</td>
            <td>1.11505</td>
            <td>1.1152</td>
            <td className='green'>0.22%</td>
        </tr>
    
        <tr>
          <td> GBP/USD</td>
          <td>1.30291</td>
          <td>1.30308</td>
          <td className='green'>	0.08%</td>
        </tr>
  
         <tr>
          <td>USD/JPY</td>
          <td>109.887</td>
          <td>109.9</td>
          <td className='red'>-0.10%</td>
         </tr>
      </tbody>
    </table>

</div>
  )
}

export default ForexMarket
