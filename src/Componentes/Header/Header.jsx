import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

import "./header.css";
import { DateRange } from "react-date-range";


const Header = () => {
    const [ open, setOpen] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <i className="bi bi-house"> Stay</i>
          </div>
          <div className="headerListItem">
            <i className="bi bi-airplane-fill"> Flights</i>
          </div>
          <div className="headerListItem">
            <i className="bi bi-car-front-fill"> Car Rental</i>
          </div>
          <div className="headerListItem">
            <i className="bi bi-shop-window"> Atraction</i>
          </div>
          <div className="headerListItem">
            <i className="bi bi-ev-front-fill"> Taxi</i>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? its Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels unlock instan saving of 10% or morder
          with a free lamabooking acocount
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <i className="bi bi-search headerIcon"></i>
            <input
              type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <i className="bi bi-calendar-date-fill headerIcon"></i>
            <span onClick={()=>setOpen(!open)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
            {open && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            ></DateRange>}
          </div>
          <div className="headerSearchItem">
            <i className="bi bi-person-fill-add headerIcon"></i>
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
