import Header from "../components/header"
import Footer from "../components/footer"
import { useUsersContext } from "../context/context"


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
                <p> Registera dig</p>
                <input type="name" placeholder="Fullständigt namn" value={registerCustomer} onChange={(e) => setregisterCustomer(e.target.value)} />
                <input type="email" placeholder="Epost" value={registerEmail} onChange={(e) => setregisterEmail(e.target.value)} />
                <input type="password" placeholder="Lösenord" value={registerPassword} onChange={(e) => setregisterPassword(e.target.value)} />
                <button onClick={() => registerNewCustomer()}> Register </button>
            </div>

            <Footer />

        </div>
    )
}

export default RegisterCostumer