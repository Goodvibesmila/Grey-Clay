import "../styling/contactus.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { useUsersContext } from "../context/context"


// Form for contact us.
function ContactPage() {

    const { formSubmitted, setFormSubmitted } = useUsersContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };


    return (<div>
        <Header />
        <div className="contactuscontainer">
            <div className="contentcontainer">

                {formSubmitted ? (
                    <p className="thankyou-message">Thank you for your message!</p>
                ) : (
                    <>
                        <div className="title">Contact us</div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-box">
                                <div className="input-box-content">
                                    <p className="details">Full name</p>
                                    <input type="name" placeholder="Full name" required />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-box-content">
                                    <p className="details">Email</p>
                                    <input type="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-box-content">
                                    <p className="details">Message</p>
                                    <textarea className="contactmessage" placeholder="Message" required />
                                </div>
                            </div>
                            <div>
                                <button type="submit" value="Register"> Send </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
        <Footer />
    </div>
    );
}
export default ContactPage