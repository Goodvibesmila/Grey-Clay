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

    const [hasMore, setHasMore] = useState(false)
    const [hasPrevious, setHasPrevious] = useState(false)

    async function productslist(lastId: string | undefined = undefined, previous: boolean = false) {

        // Gör en post förfrågan till api:et produkts
        try {
            const listAllproducts = await fetch(`/api/products${lastId ? `?${previous ? "ending_before" : "starting_after"}=${encodeURIComponent(lastId)}` : ""}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // resultatet av ett fetch-anrop. avkodar jsondata från apisvaret.
            const data = await listAllproducts.json();
            //Set products väntar in avkodningen och uppdaterar products med ny data
            // triggar omladdning av komponenterna i staten products.
            console.log(data)
            setProducts(data.products);
            setHasMore(data.has_more);
            setHasPrevious(data.has_previous)

        } catch (error) {
            console.error("Ett fel uppstod:", error);
        }
    }

    // En asynkronisk funktion för att hämta och uppdatera produkter.
    useEffect(() => {
        productslist();

    }, [setProducts]);



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
                {hasMore && (
                    <button onClick={() => {
                        const lastProduct = products.slice(-1)[0]
                        productslist(lastProduct.product_id)
                        console.log("ngaeroån")
                    }}>Next</button>
                )}
                {hasPrevious && (
                    <button onClick={() => {
                        const lastProduct = products[0]
                        productslist(lastProduct.product_id, true)
                        console.log("en annan")
                    }}>Previous</button>
                )}
            </div>
        </div >
    )
}

export default Products