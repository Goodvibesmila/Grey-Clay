import "../styling/style.css"
import commercialImage from "../assets/commercial.jpg";
import commercialbox from "../assets/blueberrybowl.png";



function Home() {

    return (
        <div className="bodycontainer">
            <div className="commercialbanner">
                <img src={commercialImage} alt="bild" />
                <p>Vårrea 20%</p>
            </div>
            <div className="commercialbox">
                <div className="commercialbox-top">
                    <div className="commercialbox-top-content">
                        <img src={commercialbox} alt="bild" />
                        <p>Reavaror</p>

                    </div>

                    <div className="commercialbox-top-content">
                        <img src={commercialbox} alt="bild" />

                        <p>Hejjasså</p>

                    </div>
                </div>


                <div className="commercialbox-bottom">
                    <div className="commercialbox-bottom-content">
                        <img src={commercialbox} alt="bild" />
                        <p>Hejjasså</p>
                    </div>

                    <div className="commercialbox-bottom-content">
                        <img src={commercialbox} alt="bild" />
                        <p>Hejjasså</p>
                    </div>

                    <div>
                        <div className="commercialbox-bottom-content">
                            <img src={commercialbox} alt="bild" />
                            <p>Hejjasså</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commercialbanner-section-two">
                <img src={commercialImage} alt="bild" />
                <p>Vårrea 20%</p>
            </div>
            <div className="commercialbox-bottom">
                <div className="commercialbox-bottom-content">
                    <img src={commercialbox} alt="bild" />
                    <p>Hejjasså</p>
                </div>

                <div className="commercialbox-bottom-content">
                    <img src={commercialbox} alt="bild" />
                    <p>Hejjasså</p>
                </div>

                <div>
                    <div className="commercialbox-bottom-content">
                        <img src={commercialbox} alt="bild" />
                        <p>Hejjasså</p>
                    </div>
                </div>
                <div>
                    <div className="commercialbox-bottom-content">
                        <img src={commercialbox} alt="bild" />
                        <p>Hejjasså</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home