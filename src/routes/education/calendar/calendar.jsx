import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Button, Box, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import dayjs from "dayjs";
import { Link  } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./calendar.scss";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleRemindClick = () => {
    alert(`You will be reminded on ${selectedDate.format("dddd, MMMM D, YYYY")}`);
  };

  return (
    <>
      <div className="calendarNav">
       <Link className="link" to="/"><FontAwesomeIcon className="icon" icon={faHome} color="#4a5566"/><p>Main</p></Link><span>/ Calendar</span>
     </div>
     <div className="calendar">
      <div className="main">
        <div className="calendar-container">
     
        <h1>CALENDAR OF WEBINARS</h1>
        <div className="calendar-box">
          <div className="calendar-left-panel">
            <h3>{selectedDate.format("MMMM YYYY")}</h3>
          
          </div>

          <div className="calendar-main">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
              />
            </LocalizationProvider>
          </div>
        </div>

        <Button 
          variant="contained" 
          startIcon={<NotificationsActiveIcon />} 
          onClick={handleRemindClick} 
          className="remind-button"
        >
          REMIND
        </Button>
      </div>
     </div>
       <div className="side">
      <h3>Trading tools</h3>
      <ul>
        <li><Link to="/webinars">Webinars</Link></li>
        <li className='calendarClicked' ><Link to="/calendar">Calendar Webinars</Link></li>
        <li><Link to="/ebook">Ebook</Link></li>   
      </ul>
    </div>

     </div>
     
  
    </>
  );
};

export default Calendar;
