import { useUsersContext } from "../context/context";
import { useEffect } from "react";
import "../styling/shop.css"


function Products() {

    // Hämtar contextdata
    const {
        products,
        setProducts,
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
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Products