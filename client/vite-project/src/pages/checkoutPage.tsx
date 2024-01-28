
import { useUsersContext } from '../context/context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../styling/header.css"

library.add(faCartShopping);

const Checkout = () => {

    const {
        cart,
        isLoggedin,
    } = useUsersContext();

    const validateCheckout = isLoggedin;


    // HANTERAR CHECKOUT SESSION
    async function handlePayment() {

        try {
            const response = await fetch(
                "/api/checkout-session",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                console.error("Något gick fel med fetch-anropet.");
                return;
            }

            const { url, sessionId } = await response.json();
            localStorage.setItem("session-id", sessionId)
            window.location = url;

        } catch (error) {
            console.error("Ett fel uppstod:", error);
        }
    }



    return (

        <div className='checkoutContainer'>
            {validateCheckout ? <button className='purchasebutton' onClick={handlePayment}><FontAwesomeIcon className="carticon" icon={faCartShopping} />  </button> : <button className='purchasebutton'><FontAwesomeIcon className="carticon" icon={faCartShopping} /></button>}
        </div>
    );
}



export default Checkout




