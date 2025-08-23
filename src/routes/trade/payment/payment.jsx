import React from "react"
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLineChart } from "@fortawesome/free-solid-svg-icons";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import "./payment.scss";


const Payment = () => {
    return (
      <div>
          <div className="paymentNav">
                <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Payment methods</span>
        </div>
          
        <div className="payment">
          <div className="main">
            <h1>PAYMENT METHODS :</h1>
            <div className="paymentMethods">
              <div className="paymentMethod">
                 <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="bank.png" alt="" srcset="" /><span className="mainText"> Bank Transfer </span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                        This is one of the safest ways to transfer funds to your account provided byeqtradesbroker. 
                        Before you use it, check with your bank so that any extra fees are not charged for the electronic transfer. 
                        Deposit time – up to three working days
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                    <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="visa.png" alt="" srcset="" /><span className="mainText"> Credit Card </span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                       This is one more way to fund youreqtradesbroker trade account. VISA, MasterCard, Maestro, Visa Electron cards are accepted. Instant deposit.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                    <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="neteller.png" alt="" srcset="" /><span className="mainText"> Neteller </span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                       You are able to fund youreqtradesbroker account via Neteller e-payment system. Instant deposit.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                    <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="qiwi.png" alt="" srcset="" /><span className="mainText"> QiWi Wallet </span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                        This is one of the safest ways to transfer funds to your account provided byeqtradesbroker. 
                        Before you use it, check with your bank so that any extra fees are not charged for the electronic transfer. 
                        Deposit time – up to three working days
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                  

              </div>
              <div className="paymentMethod">
                        <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="bitcoin.png" alt="" srcset="" /><span className="mainText"> Bitcoin </span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                       You are able to fund youreqtradesbroker account via Bitcoin. Instant deposit.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                       <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="yandex.png" alt="" srcset="" /><span className="mainText">Yandex Money</span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                        You are able to fund youreqtradesbroker account via Yandex Money e-payment system. Instant deposit.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                       <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="webmoney.svg" alt="" srcset="" /><span className="mainText">Webmoney</span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                        You are able to fund youreqtradesbroker account via WebMoney e-payment system. Instant deposit.
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>
                       <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <Typography className="typography"><img className="mainImg" src="skrill.png" alt="" srcset="" /><span className="mainText">Skrill</span></Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordionDetails">
                       You are able to fund youreqtradesbroker account via Skrill e-payment system. Instant deposit
                      </AccordionDetails>
                      <AccordionActions>
                        <Button className="depositButton"><img src="addIcon.png" alt="" srcset="" /><span>Deposit</span></Button>
                      </AccordionActions>
                  </Accordion>

              </div>


            </div>
                
          </div>
           
       
            
            <div className="side">
                   <h3>Trading tools</h3>
                    <ul>
                        <li className="paymentClicked"><Link to="/payment">Payment methods</Link></li>
                        
                    </ul>

            </div>
        </div>
        
      </div>


    )


}


export default Payment

    
      



