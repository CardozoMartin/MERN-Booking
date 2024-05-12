import  './item.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://lh3.googleusercontent.com/proxy/yBv34psubvOh09LmUoNU68DzMxxjsdF7ZVE8oU3OkP3gb9FPhur5YzFm90OSKD-gGU35Vg3Ih4xuEXYa9xzbXIX9BMsQ1RnMXqRYi_LL-o-bClp5HhKxnhBoxw" alt="" 
        className='siImg'/>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartaments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio apartament with Air conditioning
            </span>
            <span className="siFeatures">Entire studio 1 bathroom 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                Your can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellente</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">includes taxes and frees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem