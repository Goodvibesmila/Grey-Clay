
import { useUsersContext } from '../context/context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faShoppingBag);

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
            {validateCheckout ? <button className='purchasebutton' onClick={handlePayment}><FontAwesomeIcon className="carticon" icon={faShoppingBag} />  </button> : <FontAwesomeIcon className="carticon" icon={faShoppingBag} />}
        </div>
    );
}



export default Checkout




{/* {validateCheckout ? <p> checka ut din order {username}? </p> : "Du behöver logga in för att kunna checka ut."} */ }
