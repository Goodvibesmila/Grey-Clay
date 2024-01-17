import { useUsersContext } from "../context/context";
import { useEffect } from "react";
import { CartItem } from "../components/productitem"
import "../styling/shop.css"


function Products() {

    // Hämtar contextdata
    const {
        products,
        setProducts,
        cart,
        setCart,
    } = useUsersContext();


    // En asynkronisk funktion för att hämta och uppdatera produkter.
    useEffect(() => {

        async function productslist() {

            // Gör en post förfrågan till api:et produkts
            try {
                const listAllproducts = await fetch("/api/products", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                // resultatet av ett fetch-anrop. avkodar jsondata från apisvaret.
                const data = await listAllproducts.json();
                //Set products väntar in avkodningen och uppdaterar products med ny data
                // triggar omladdning av komponenterna i staten products.
                setProducts(data);


            } catch (error) {
                console.error("Ett fel uppstod:", error);
            }
        }

        productslist();

    }, [setProducts]);



    //////////////////// CART



    function AddCartItem(cartItem: string) {

        const ItemExistInCart = cart.findIndex((item) =>
            item.product === cartItem);

        if (ItemExistInCart !== -1) {

            const updatedCart = [...cart]
            updatedCart[ItemExistInCart].quantity++
            setCart(updatedCart);


        } else {

            setCart([
                ...cart,
                {
                    product: cartItem,
                    quantity: 1,
                },
            ]);
        }
    }


    // const cartCondition = cart.length > 0;

    ///////////////////////// HIT


    // renderar ut en lista med produkter i två div -element
    // varje element renderas som ett listelement, med hjälp av .mapfunktionen på productsarrayen
    // Varje product har ett unikt nyckelvärde satt till produktens id.
    // Varje produkt har titel, bild, beskrivning och pris
    // priset formaterat från givna enhetsmängden genom dividering med 100 till 2 decimaler.
    return (
        <div className="Container">
            <div className="productcontainer">

                {products.map((product, index) => (
                    <div key={index}>
                        {product.id && (
                            <>
                                <div className="product">
                                    {product.image && (
                                        <img src={product.image} className="image" alt="produktbild" />
                                    )}
                                    <p className="productTitle">{product.title}</p>
                                    <p className="productDescription">{product.description}</p>
                                    <p className="productPrice">
                                        {product.price.toFixed(2)} kr
                                    </p>
                                    <button onClick={() => AddCartItem(product.id)}>Lägg till i kundkorg</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* <div className="cartContainer">
                <ul>
                    <h3>KundKorg</h3>
                    {cartCondition ? (
                        <p>{cart.length} st</p>
                    ) : null}

                </ul>
            </div> */}
        </div >
    )
}

export default Products