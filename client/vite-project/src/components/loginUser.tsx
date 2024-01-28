import { Link } from "react-router-dom";
import { useUsersContext } from "../context/context"
import "../styling/header.css"
import { useEffect } from "react";

function LoginUser() {

    // Tillgång till viktiga tillståndsvariabler
    const {
        email,
        setEmail,
        setUsername,
        password,
        setPassword,
        setIsLoggedin,
        setCustomer,
        isLoggedin,
        username,
        setCustomerExists,
        authorize
    } = useUsersContext();

    // const validateIfLoggedin = isLoggedin;
    const user = username;

    //Funktion som kallas när användare trycker på knappen-logga in
    const handleSubmit = async () => {

        // skapar ett objekt, innehåller mejl och lösen som användare angett
        const userData = { email, password };


        try {
            //använder fetch för att göra en postförfrågan till api/login
            const response = await fetch("api/login", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            // Efter förfrågan är klar, omvandlas svarsvärde till läsbar JSON
            const result = await response.json()

            // omvandlar parsat jsonresultat, används för att uppdatera 
            //användarrelaterade tillståndsvariabler (setusername och setisloggedin)
            setUsername(result.name)
            if (result.name) {
                setIsLoggedin(true);
            }

        } catch (error) {
            console.log(error, "det går inte")
        }

    };


    useEffect(() => {
        authorize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = async () => {
        console.log("hejeh")
        await fetch("api/logout", {
            method: "POST",
        })
        setIsLoggedin(false);
        setUsername("");
        setCustomer({ id: "", name: "", email: "" });
        setEmail("")
        setPassword("")
        setCustomerExists(false)
    }



    return (

        <div className="InputfieldsContainer">

            <div className="loginContainer">
                {!isLoggedin ? (
                    <>
                        <p className="loginTitle"> Login </p>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </>
                ) : <p className="userloggedin">Logged in as {user} </p>}

                <div className="buttoncontainer">
                    {!isLoggedin ? (
                        <>
                            <button className="loginButton" onClick={() => handleSubmit()}> Login </button>
                            <Link to="./register">
                                <button className="register">Register</button>
                            </Link>
                        </>
                    ) : <button className="logoutbutton" onClick={() => logout()}>Logout</button>}
                </div>

            </div>
        </div>
    )
}



export default LoginUser