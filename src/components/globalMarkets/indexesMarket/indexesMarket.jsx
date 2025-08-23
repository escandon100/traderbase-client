import React from 'react'
import "./indexesMarket.scss"

const IndexesMarket = () => {


  return (
    <div className='indexesMarket'>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Bid</th>
          <th>Ask</th>
          <th>Change</th>
       </tr>
        <tr>
            <td>ChinaA50</td>
            <td>14432.05</td>
            <td>14467.05</td>
            <td className='red'>-0.70%</td>
        </tr>          
        <tr>
            <td>Germany30</td>
            <td>13316</td>
            <td>13318</td>
            <td className='green'>0%</td>
        </tr>
        <tr>
            <td>UK100</td>
            <td>7628.95</td>
            <td>7631.65</td>
            <td className='red'>-0.03%</td>
        </tr>
        <tr>
            <td>US30</td>
            <td>29071.5</td>
            <td>29074.5	</td>
            <td className='green'>0.32%</td>
        </tr>
        <tr>
            <td>NASDAQ100</td>
            <td>9044.29	</td>
            <td>9046.09</td>
            <td className='red'>-0.07%</td>
        </tr>
       </tbody>
    </table>

</div>
  )
}

export default IndexesMarket
