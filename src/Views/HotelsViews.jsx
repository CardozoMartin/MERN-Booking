import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./hotels.css";

const HotelsViews = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://imgs.search.brave.com/dlNruGEvIp85Kg4LDqk7xHAY7zW2alvtymqi-QOAm_0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZi5i/c3RhdGljLmNvbS94/ZGF0YS9pbWFnZXMv/aG90ZWwvc3F1YXJl/NjAwLzQ2MTU4NTE1/MS53ZWJwP2s9Zjdk/NWFkNDU3ZTNiZDI3/MDIyYTgzNmY4MTcz/OTY1ZGU2NmU1ZmEw/NzJiYmY3YmRhODVj/YzI4Nzg0YTdmZmFl/MyZvPQ",
    },
    {
      src: "https://imgs.search.brave.com/sl-vYN-EMNckdEMab8xQ_hcp_BHM-LONeObWQQgez5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vNjU1MzUv/NTExMDA3MTQzMTZf/ZDcxZDg2MzUxZl9i/LmpwZw",
    },
    {
      src: "https://imgs.search.brave.com/SvdvBHaqOtblzygF7t3eTqo16NkNb6QeFTU7quH7ET8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXZl/LnN0YXRpY2ZsaWNr/ci5jb20vNjU1MzUv/NTExMDA4MDk0ODdf/NTVmODljNWE5NF9i/LmpwZw",
    },
    {
      src: "https://imgs.search.brave.com/2uIXbf6VyU7kH5ujkMC26qsWwwO3dF3mu-6A9MIgBnw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LnI5Y2RuLm5l/dC9yaW1nL2hpbWcv/MWIvZWUvY2MvZXhw/ZWRpYXYyLTMzOTc2/Ny1iMTcyODQtMzA0/Nzc5LmpwZz93aWR0/aD0zMzUmaGVpZ2h0/PTI2OCZjcm9wPXRy/dWU",
    },
    {
      src: "https://imgs.search.brave.com/13gbV1qPAAiqT00IYhfBRWqLnmYdo5tUWa8YrnXPGgA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y3JvbmlzdGEuY29t/L2ZpbGVzL2ltYWdl/LzcwNC83MDQxODkv/NjU0OTUwOWI0MmQ5/ZF85NTBfNTM0IS5q/cGc_cz04YjZkYjI1/NDA3ZWM2OTk0ZWRi/ZGI2ZWVjYzQxZmUy/NCZkPTE2OTk0NTI4/NTY",
    },
    {
      src: "https://imgs.search.brave.com/9Lz0d8X9Dk6ydYSuMh5c1G99xRJ3qIm_ljbaYps98-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAxOC8wOS8x/NS85Nnh4ODNaLTRf/NzIweDBfXzEuanBn",
    },
  ];

  const handleOption = (i) => {
    setSliderNum(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = sliderNum === 0 ? 5 : sliderNum - 1;
    } else {
      newSliderNumber = sliderNum === 5 ? 0 : sliderNum + 1;
    }
    setSliderNum(newSliderNumber)
  };
  return (
    <div>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[sliderNum].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOption(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsViews;
