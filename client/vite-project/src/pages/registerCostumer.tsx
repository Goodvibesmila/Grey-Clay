import Header from "../components/header"
import Footer from "../components/footer"
import { useUsersContext } from "../context/context"
import "../styling/register.css"

// Register new customer, and validate.
function RegisterCostumer() {

    const {
        registerCustomer,
        setregisterCustomer,
        registerPassword,
        setregisterPassword,
        registerEmail,
        setregisterEmail,
        formSubmitted,
        setFormSubmitted,
        customerExists,
        setCustomerExists,
    } = useUsersContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };



    const registerNewCustomer = async () => {
        const registerCustomerData = { name: registerCustomer, password: registerPassword, email: registerEmail };

        try {
            fetch("api/register", {
                method: "POST",
                body: JSON.stringify(registerCustomerData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

                .then((response) => response.json())
                .then((result) => {

                    if (!result.stripeCustomerId) {
                        setCustomerExists(true)
                    }

                })

                .catch((error) => {
                    console.error(error);
                });

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>

            <Header />
            <div className="registercontainer">
                <div className="contentcontainer">
                    {formSubmitted ? (
                        <>
                            {customerExists ?
                                (<p className="thankyou-message">Could not register, customer already exists.</p>)
                                :
                                (<p className="thankyou-message">You are now registered!</p>)}
                        </>) : (
                        <>
                            <form className="form" action="#" onSubmit={handleSubmit}>
                                <div className="title">Register</div>
                                <div className="input-box">
                                    <div className="input-box-content">
                                        <p className="details">Full name</p>
                                        <input type="name" placeholder="Full name" required value={registerCustomer} onChange={(e) => setregisterCustomer(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="input-box-content">
                                        <p className="details">Email</p>
                                        <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="input-box-content">

                                        <p className="details">Password</p>
                                        <input type="password" placeholder="Password" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="input-box-content">

                                        <p className="details">Re-enter Password</p>
                                        <input type="text" placeholder="Re-enter your Password" required />

                                    </div>
                                </div>
                                <div className="button">

                                    <button type="submit" value="Register" onClick={() => registerNewCustomer()}> Register </button>

                                </div>
                            </form>
                        </>
                    )}
                </div>


            </div>
            <Footer />

        </div >
    )
}

export default RegisterCostumer