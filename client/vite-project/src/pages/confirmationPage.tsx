import { Link } from "react-router-dom";
import "../styling/confirmationpage.css"
import { useState, useEffect } from "react";



// Render a confirmation at checkout
function ConfirmationPage() {

    const [isPaymentVerified, setIsPaymentVerified] = useState(false)

    useEffect(() => {
        const sessionId = localStorage.getItem("session-id");
        const verifyPayment = async () => {
            const response = await fetch(
                "/api/verify-checkout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ sessionId }),
                }
            );

            const verified = await response.json()

            if (verified) {
                setIsPaymentVerified(true)
                localStorage.removeItem("session-id");
            } else {
                setIsPaymentVerified(false);
            }
        }

        verifyPayment();

    }, [])

    return (

        <div className="confirmationcontainer">
            <div className="confirmationcontent">
                {isPaymentVerified ?
                    <>
                        <h1 >Bekräftelse köp</h1>
                        <Link to={"/"} > <button> Go back to shop  </button></Link> </>
                    : (
                        <h2>Hoppsan, något gick fel.</h2>
                    )
                }
            </div>
        </div>
    )
}

export default ConfirmationPage