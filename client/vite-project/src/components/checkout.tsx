
// import { useUsersContext } from '../context/context';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add(faShoppingBag);

// const Checkout = () => {

//     const {
//         cart,
//         // isLoggedin,
//         // username,
//     } = useUsersContext();

//     // const validateCheckout = isLoggedin;


//     // HANTERAR CHECKOUT SESSION
//     async function HandlePayment() {


//         try {
//             const response = await fetch(
//                 "/api/checkout",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(cart),
//                 }
//             );



//             if (!response.ok) {
//                 console.error("Något gick fel med fetch-anropet.");
//                 return;
//             }



//             const { url, sessionId } = await response.json();
//             localStorage.setItem("session-id", sessionId)
//             window.location = url;



//         } catch (error) {
//             console.error("Ett fel uppstod:", error);
//         }
//         HandlePayment()
//     }



//     return (

//         <div className='checkoutContainer'>

//             {/* {validateCheckout ? <p> Är du redo att checka ut din order {username}? Tryck på "gå till kassan"- knappen. </p> : "Du behöver logga in för att kunna checka ut."} */}
//             {/* {validateCheckout ? <button className='purchasebutton' onClick={HandlePayment}>  </button> : ""} */}


//             <button className='purchasebutton' onClick={HandlePayment}><FontAwesomeIcon className="carticon" icon={faShoppingBag} />  </button>

//         </div>
//     );
// }



// export default Checkout