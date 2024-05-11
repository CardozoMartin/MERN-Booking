import "./featured.css"

const Featured = () => {
  return (
    <div className="feature">
        <div className="featuredItem">
            <img src="https://i0.wp.com/fueradeeje.com/wp-content/uploads/2020/06/DESTINOS-M%C3%81S-VISITADOS-DE-SALTA-02.jpg?resize=1024%2C683&ssl=1" alt="image" />
            <div className="featureTitles">
                <h1>Neuquen</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://turismo-en-argentina.com/wp-content/uploads/2023/02/Turismo-en-Neuquen.jpg" alt="image" />
            <div className="featureTitles">
                <h1>Neuquen</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://volemos.nyc3.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2020/08/06103152/laguna-nina-encantada-malargue.jpg" alt="image" />
            <div className="featureTitles">
                <h1>Mendoza</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured