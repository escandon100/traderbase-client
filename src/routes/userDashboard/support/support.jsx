import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import "./support.scss"

const Support = () => {

    const message = useOutletContext()

    const [status , setStatus] = useState("")

    const [formData , setFormData] = useState({
        firstName: message.firstName,
        email : message.email,
        subject : "",
        message : ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("Sending....")

        try{
            const res = await axios.post("http://localhost:5000/api/support/send" , formData)
            setStatus(res.data.message)
            setFormData({subject : "" , message : ""})
        }catch(err){
            console.log(err)
            setStatus("❌ Failed to send message. Try again later.");


        }

    }

    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }

    return(
        <div className="support">
            <div className="left">
                <form onSubmit={handleSubmit}>
                <h1>Send us an Email</h1>
                <label htmlFor="">Subject :</label>
                <input onChange={handleChange} value={formData.subject} name="subject" type="text" />
                <label htmlFor="">Message :</label>
                <textarea onChange={handleChange} value={formData.message} className="textArea" name="message"  ></textarea>
                <button><FontAwesomeIcon icon={faPaperPlane} /><span>Send</span></button>
                {status && <p className="status">{status}</p>}
            </form>

            </div>
            <div className="right">
                <Accordion className="accordion">
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3-content"
                id="panel3-header"
                 >
                <Typography className="typography"> What is Traderbase FX?</Typography>
                </AccordionSummary>
                 <AccordionDetails className="accordionDetails">
                 Traderbase FX is a modern online investment platform offering structured subscription-based investment packages. 
                 Our platform empowers users to invest in tailored plans and track performance through an intuitive dashboard designed for clarity and ease.
                 </AccordionDetails>
            </Accordion>
             <Accordion className="accordion">
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3-content"
                id="panel3-header"
                 >
                <Typography className="typography"> How do i open an account ?</Typography>
                </AccordionSummary>
                 <AccordionDetails className="accordionDetails">
                    Register with your email and a secure password.
                    Your account will be verified within a few minutes 
                    Once set up, you’ll gain access to your personalized dashboard, where you can deposit funds, monitor investments, and access exclusive reports.
                 </AccordionDetails>
            </Accordion>
                <Accordion className="accordion">
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3-content"
                id="panel3-header"
                 >
                <Typography className="typography"> What investment packages are available ?</Typography>
                </AccordionSummary>
                 <AccordionDetails className="accordionDetails">
                    Traderbase FX offers a range of investment plans, each with fixed durations and expected returns. Explore options such as Weekly, Monthly, and Premium packages under the Packages section. Each includes clear details: investment term, estimated return, and minimum deposit requirements.
                 </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3-content"
                id="panel3-header"
                 >
                <Typography className="typography">How do i deposit and Withdraw funds ?</Typography>
                </AccordionSummary>
                 <AccordionDetails className="accordionDetails">
                Easy , all you need to do is navigate to the Deposit / Withdrawal section , choose your payment method, and complete the process.
                You can also track the status of all financial transactions under Transaction History for transparency and peace of mind.                 </AccordionDetails>
            </Accordion>
                <Accordion className="accordion">
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel3-content"
                id="panel3-header"
                 >
                <Typography className="typography"> Is Traderbase FX regulated ?</Typography>
                </AccordionSummary>
                 <AccordionDetails className="accordionDetails">
                    Yes , Traderbase FX is a legitimate investment platform that simulates brokerage-style investing with full transparency and user autonomy. While it does not offer live market trading or brokerage services, all investments and processes are securely managed and fully auditable.
                 </AccordionDetails>
            </Accordion>
    

            </div>
           

            
        </div>  

    )

  

}


export default Support