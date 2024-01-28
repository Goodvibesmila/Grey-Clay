import { Link } from "react-router-dom";
import "../styling/confirmationpage.css"
import { useState, useEffect } from "react";

function ConfirmationPage() {

    // Skapar tillståndsvariablar, verifieringsdata för betalning
    const [isPaymentVerified, setIsPaymentVerified] = useState(false)


    useEffect(() => {

        // används för att kontrollera betalningsstatus. 
        const sessionId = localStorage.getItem("session-id");
        // används för att verifiera betalningen genom en postförfrågan
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

            // omvandlar svarsvärdet till JSON, extraherar verified från det.

            const verified = await response.json()

            // uppdaterar ispaymentverified och session id tas bort från localstorage
            // beroende på verifieringen     ok/inte ok. 
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