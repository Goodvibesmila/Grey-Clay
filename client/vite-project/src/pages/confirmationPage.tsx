import "../styling/style.css"
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
            const { verified } = await response.json()


            // uppdaterar ispaymentverified och session id tas bort från localstorage
            // beroende på verifieringen ok/inte ok. 
            if (verified) {
                setIsPaymentVerified(true)
                localStorage.removeItem("session-id");
            } else {
                setIsPaymentVerified(false);
            }
        }

        verifyPayment();

    }, [])


    return isPaymentVerified ? (
        <h1>Tack för ditt köp</h1>)
        : (
            <h2>Oops... Något gick fel med betalningen.</h2>
        );
}

export default ConfirmationPage