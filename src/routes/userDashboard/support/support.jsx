import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import "./support.scss";

const Support = () => {
  const message = useOutletContext();

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: message.firstName,
    email: message.email,
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/support/send",
        formData
      );
      setStatus(res.data.message);
      setFormData({ ...formData, subject: "", message: "" });
    } catch (err) {
      console.log(err);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="support">
      <div className="support-left">
        <h1>
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact Support
        </h1>
        <p className="intro">
          Need help? Send us a message and our support team will get back to you
          as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="support-form"> 
          <label>Subject</label>
          <input
            onChange={handleChange}
            value={formData.subject}
            name="subject"
            type="text"
            placeholder="Enter subject"
          />

          <label>Message</label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            className="textArea"
            name="message"
            placeholder="Type your message..."
          ></textarea>

          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>

      <div className="support-right">
        <h2>Frequently Asked Questions</h2>
        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is Traderbase FX?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Traderbase FX is a modern online investment platform offering
            structured subscription-based investment packages. Our platform
            empowers users to invest in tailored plans and track performance
            through a clear, intuitive dashboard.
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I open an account?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Register with your email and password. Once verified, you’ll gain
            access to your personalized dashboard to deposit, invest, and track
            your earnings.
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What packages are available?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            We offer Weekly, Monthly, and Premium investment packages, each with
            clear details about duration, returns, and minimum deposit
            requirements.
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I deposit and withdraw funds?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Navigate to the Deposit/Withdrawal section, choose your method, and
            complete the transaction. You can track statuses in Transaction
            History.
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Is Traderbase FX regulated?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Yes, Traderbase FX is a legitimate platform that simulates
            brokerage-style investing with transparency. While not a live
            brokerage, all investments are securely managed.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Support;
