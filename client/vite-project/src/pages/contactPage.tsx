import "../styling/style.css";
import Header from "../components/header";
import Footer from "../components/footer";


function ContactPage() {
    return (
        <div><Header />
            <div className="contactcontainer">
                <p>Kontakta oss</p>
                <input type="name" placeholder="Fullständigt namn" />
                <input type="email" placeholder="Mejladress" />
                <input className="contactmessage" type="message" placeholder="Meddelande" />
                <button>Skicka</button>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage