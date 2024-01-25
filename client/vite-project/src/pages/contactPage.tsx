import "../styling/contactus.css";
import Header from "../components/header";
import Footer from "../components/footer";


function ContactPage() {
    return (
        <div>
            <Header />
            <div className="contactuscontainer">
                <div className="contentcontainer">
                    <div className="title">Contact us</div>
                    <form className="form" action="#">
                        <div className="input-box">
                            <div className="input-box-content">
                                <p className="details">Full name</p>
                                <input type="name" placeholder="Fullständigt namn" required />
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-box-content">
                                <p className="details">Email</p>
                                <input type="email" placeholder="Epost" required />
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-box-content">
                                <p className="details">Email</p>
                                <textarea className="contactmessage" placeholder="Message" required />
                            </div>
                        </div>

                        <div className="button">
                            <button type="submit" value="Register"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>




    )
}

export default ContactPage