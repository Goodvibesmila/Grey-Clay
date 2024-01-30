import "../styling/home.css"
import commercialImage from "../assets/greenteacup.jpg";
import commercialboxone from "../assets/homeimage.jpg";
import commercialboxtwo from "../assets/homeimage2.jpg";
import commercialboxbottomone from "../assets/vase.jpg"
import commercialboxbottomtwo from "../assets/biggervase.jpg"
import commercialboxbottomthree from "../assets/flowercup.jpg"
import commercialImagetwo from "../assets/bannertwo.jpg"
import commercialboxfour from "../assets/clay1.jpg"
import commercialboxfive from "../assets/clay2.jpg"
import commercialboxsix from "../assets/clay3.jpg"
import commercialboxseven from "../assets/clay4.jpg"



function Home() {

    return (
        <div className="bodycontainer">
            <div className="commercialbanner">
                <img src={commercialImage} alt="bild" />
                <p>Spring-Sale 10%</p>
            </div>
            <div className="commercialbox">
                <div className="commercialbox-top">

                    <div className="commercialbox-top-content">
                        <img src={commercialboxone} alt="bild" />
                        <p>Spring-favorites</p>
                    </div>

                    <div className="commercialbox-top-content">
                        <img src={commercialboxtwo} alt="bild" />
                        <p>News</p>
                    </div>

                </div>

                <div className="commercialbox-bottom">
                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxbottomone} alt="bild" />
                        <p>Curve Vase</p>
                    </div>

                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxbottomtwo} alt="bild" />
                        <p>Natural Vase</p>
                    </div>

                    <div>
                        <div className="commercialbox-bottom-content">
                            <img src={commercialboxbottomthree} alt="bild" />
                            <p>Varm Cup</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="commercialbanner-section-two">
                <img src={commercialImagetwo} alt="bild" />
                <p>Spring-Sale 10%</p>
            </div>


            <div className="commercialbox-bottom">
                <div className="commercialbox-bottom-content">
                    <img src={commercialboxfour} alt="bild" />
                    <p>Handmade</p>
                </div>

                <div className="commercialbox-bottom-content">
                    <img src={commercialboxfive} alt="bild" />
                    <p>Natural</p>
                </div>

                <div>
                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxsix} alt="bild" />
                        <p>Personal</p>
                    </div>
                </div>
                <div>
                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxseven} alt="bild" />
                        <p>Unique</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home