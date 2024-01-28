import { useUsersContext } from "../context/context";
import { useEffect, useState } from "react";
import "../styling/products.css"


function Products() {

    // Hämtar contextdata
    const {
        products,
        setProducts,
        cart,
        setCart,
    } = useUsersContext();

    //Håller reda på den aktuella sidan
    const [currentPage, setCurrentPage] = useState(1);
    //Antal produkter per sida
    const itemsPerPage = 6;


    // En asynkronisk funktion för att hämta och uppdatera produkter.
    useEffect(() => {

        async function productslist() {

            // Gör en post förfrågan till api:et produkts
            try {
                // beräknar var i produktlistan som hämtning ska börja,
                //currentpage indikerar vilken sida customer är på.
                // itemsperpage är antalet produkter som ska visas per sida
                // multiplicerar currentpage -1 med itemsperpage
                // är användaren 1 och offset är 0 om användaren är på sida 2.
                // offste är totala antalet produker som visats hittills. 
                const offset = (currentPage - 1) * itemsPerPage;



                // Anrop som innehåller förskjutningen och antalet produkter per sida
                // Ska hämta nödvändigt antal mängd produkter
                // offset=${offset}: Detta är för att API:et ska veta var i produktlistan hämtningen ska börja. 
                // pageSize=${itemsPerPage}: Detta specificerar hur många produkter som ska hämtas från den angivna förskjutningspositionen (offset).

                const listAllproducts = await fetch(`/api/products?offset=${offset}&pageSize=${itemsPerPage}`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                // resultatet av ett fetch-anrop. avkodar jsondata från apisvaret.
                const data = await listAllproducts.json();
                //Set products väntar in avkodningen och uppdaterar products med ny data
                // triggar omladdning av komponenterna i staten products.
                // console.log(data)
                // setProducts(data);

                if (currentPage === 1) {
                    setProducts(data);
                } else {
                    setProducts(prevProducts => {
                        if (prevProducts.length < itemsPerPage) {
                            return [...prevProducts, ...data];
                        }
                        return prevProducts;
                    })
                }



            } catch (error) {
                console.error("Ett fel uppstod:", error);
            }
        }

        productslist();

        // Kör funktionen productlist varje gång currentpage och itemsperpage eller set products ändras
    }, [currentPage, itemsPerPage, setProducts]);



    //////////////////// CART



    function AddCartItem(cartItem: string) {

        const ItemExistInCart = cart.findIndex((item) =>

            item.price === cartItem);
        console.log(cartItem)

        if (ItemExistInCart !== -1) {

            const updatedCart = [...cart]
            updatedCart[ItemExistInCart].quantity++
            setCart(updatedCart);


        } else {

            setCart([
                ...cart,
                {
                    price: cartItem,

                    quantity: 1,
                },
            ]);

        }
    }

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
                                    <button onClick={() => AddCartItem(product.id)}>Add to cart</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={products.length < itemsPerPage || products.length === 0}>Next</button>
            </div>
        </div >
    )
}

// onclick previous, tillkallar funktion för att minska värdet av currentpage med 1
// disabled = om användaren redan är på första sidan, så är knapp inaktiverad.

// currentpage - värdet av aktuella sidvärdet för användaren.

// onclick next, samma som prrevious, men.. tvärtom. 
// Disabled, samma, men knappen inaktiveras om antal produkter är mindre än antal produkter per sida
// FIXA DENNA! 

export default Products