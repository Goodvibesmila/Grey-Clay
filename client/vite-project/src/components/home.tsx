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
                <p>Vår-Rea 20%</p>
            </div>



            <div className="commercialbox">
                <div className="commercialbox-top">

                    <div className="commercialbox-top-content">
                        <img src={commercialboxone} alt="bild" />
                        <p>Vårfavoriter</p>
                    </div>

                    <div className="commercialbox-top-content">
                        <img src={commercialboxtwo} alt="bild" />
                        <p>Nytt för våren</p>
                    </div>


                </div>

                <div className="commercialbox-bottom">
                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxbottomone} alt="bild" />
                        <p>Kurvig vas</p>
                    </div>

                    <div className="commercialbox-bottom-content">
                        <img src={commercialboxbottomtwo} alt="bild" />
                        <p>Naturlig vas</p>
                    </div>

                    <div>
                        <div className="commercialbox-bottom-content">
                            <img src={commercialboxbottomthree} alt="bild" />
                            <p>Varm kopp</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="commercialbanner-section-two">
                <img src={commercialImagetwo} alt="bild" />
                <p>Vårrea 20%</p>
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