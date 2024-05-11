import { Children, useState } from "react";
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
    },]);
    const [ openOptions, setOpenOptions] = useState(false);
    const [option, setOption] = useState({
      adult:1,
      children:0,
      room:1,  
    });
    const handleOption = (name, operation) => {
      setOption((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
        };
      });
    };
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
            <span
            onClick={()=>setOpenOptions(!openOptions)}
             className="headerSearchText">{`${option.adult} adult . ${option.Children} children ${option.room} room`}</span>
           { openOptions &&
            <div className="options">
              <div className="optionsItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  
                <button className="optionCounterButton"
                disabled={option.adult <= 1}
                onClick={()=> handleOption("adult", "d")}>-</button>
                <span className="optionCounterNumber">{option.adult}</span>
                <button className="optionCounterButton"
                onClick={()=> handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">

                <button className="optionCounterButton"
                disabled={option.children <= 0}
                onClick={()=> handleOption("children", "d")}>-</button>
                <span className="optionCounterNumber">{option.children}</span>
                <button className="optionCounterButton"
                onClick={()=> handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  
                <button className="optionCounterButton"
                disabled={option.room <= 1}
                onClick={()=> handleOption("room", "d")}>-</button>
                <span className="optionCounterNumber">{option.room}</span>
                <button className="optionCounterButton"
                onClick={()=> handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>
           } 
            
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
