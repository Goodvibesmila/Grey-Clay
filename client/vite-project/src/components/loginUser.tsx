import { Link } from "react-router-dom";
import { useUsersContext } from "../context/context"
import "../styling/header.css"
import { useEffect } from "react";

function LoginUser() {
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

    // Function - customer press loginbutton.
    const handleSubmit = async () => {

        const userData = { email, password };

        try {
            const response = await fetch("api/login", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const result = await response.json()

            setUsername(result.name)
            if (result.name) {
                setIsLoggedin(true);
            }

        } catch (error) {
            console.log(error)
        }

    };


    useEffect(() => {
        authorize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = async () => {
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