import Footer from "../components/footer"
import Header from "../components/header"
import "../styling/aboutus.css"


function AboutUsPage() {
    return (
        <div>
            <Header />
            <div className="aboutuscontainer">
                <div className="contentcontainer">
                    <div className="title">About us</div>
                    <p>
                        This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here. This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here.
                    </p>
                    <p>This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here.This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here.
                    </p>
                    <p>This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here.This is an exampletext, that is suppose to be
                        about us, but since this is not an actual website,
                        I have added this text to make an example of what it could
                        look like with a text here.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage