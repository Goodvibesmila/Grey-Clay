import Header from "../components/header"
import Footer from "../components/footer"
import { useUsersContext } from "../context/context"
import "../styling/register.css"


function RegisterCostumer() {

    const {
        registerCustomer,
        setregisterCustomer,
        registerPassword,
        setregisterPassword,
        registerEmail,
        setregisterEmail,
    } = useUsersContext();


    const registerNewCustomer = () => {
        const registerCustomerData = { name: registerCustomer, password: registerPassword, email: registerEmail };

        fetch("api/register", {
            method: "POST",
            body: JSON.stringify(registerCustomerData),
            headers: {
                "Content-Type": "application/json",
            },
        })

            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })

            .catch((error) => {
                console.error(error);
            });
    };



    return (
        <div>

            <Header />


            <div className="registercontainer">
                <div className="contentcontainer">
                    <div className="title">Register</div>
                    <form className="form" action="#">
                        <div className="input-box">
                            <div className="input-box-content">
                                <p className="details">Full name</p>
                                <input type="name" placeholder="Fullständigt namn" required value={registerCustomer} onChange={(e) => setregisterCustomer(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-box-content">
                                <p className="details">Email</p>
                                <input type="email" placeholder="Epost" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-box-content">

                                <p className="details">Password</p>
                                <input type="password" placeholder="Lösenord" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} required />
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
                </div>


            </div>
            <Footer />

        </div>
    )
}

export default RegisterCostumer