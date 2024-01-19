import { useUsersContext } from "../context/context"


function LoginUser() {

    // Tillgång till viktiga tillståndsvariabler
    const {
        email,
        setEmail,
        setUsername,
        password,
        setPassword,
        setIsLoggedin,
    } = useUsersContext();


    //Funktion som kallas när användare trycker på knappen-logga in
    const handleSubmit = () => {

        // skapar ett objekt, innehåller mejl och lösen som användare angett
        const userData = { email, password };

        //använder fetch för att göra en postförfrågan till api/login
        fetch("api/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        })

            // Efter förfrågan är klar, omvandlas svarsvärde till läsbar JSON
            .then((response) => response.json())

            // omvandlar parsat jsonresultat, används för att uppdatera 
            //användarrelaterade tillståndsvariabler (setusername och setisloggedin)

            .then((result) => {
                setUsername(result.name)
                setIsLoggedin(true);
            })

            // Hanterar fel 
            .catch((error) => {
                console.error(error);
            });
    };

    return (

        <div className="InputfieldsContainer">

            <div className="LoginContainer">
                <p> Logga in </p>
                <input type="email" placeholder="E-post" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => handleSubmit()}> Logga in </button>
            </div>
        </div>
    )
}



export default LoginUser