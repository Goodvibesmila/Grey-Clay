import { useUsersContext } from "../context/context";
import { useEffect } from "react";
import "../styling/style.css"





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
                    method: "POST",
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

    console.log(products)

    // renderar ut en lista med produkter i två div -element
    // varje element renderas som ett listelement, med hjälp av .mapfunktionen på productsarrayen
    // Varje product har ett unikt nyckelvärde satt till produktens id.
    // Varje produkt har titel, bild, beskrivning och pris
    // priset formaterat från givna enhetsmängden genom dividering med 100 till 2 decimaler.
    return (
        <div className="Container">

            <div className="productcontainer">
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            {product.id && (
                                <>
                                    <p className="productTitle">{product.title}</p>
                                    {product.images && product.images[0] && (
                                        <img src={product.images[0]} className="image" alt="produktbild" />
                                    )}
                                    <p className="productDescription">{product.description}</p>
                                    <p className="productPrice">
                                        {product.price?.unit_amount ? (product.price.unit_amount / 100).toFixed(2) : "N/A"} kr
                                    </p>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default Products