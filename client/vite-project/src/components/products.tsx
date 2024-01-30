import { useUsersContext } from "../context/context";
import { useEffect, useState } from "react";
import "../styling/products.css"

// Render products, and pagination.
function Products() {

    const {
        products,
        setProducts,
        cart,
        setCart,
    } = useUsersContext();

    const [hasMore, setHasMore] = useState(false)
    const [hasPrevious, setHasPrevious] = useState(false)

    async function productslist(lastId: string | undefined = undefined, previous: boolean = false) {

        try {
            const listAllproducts = await fetch(`/api/products${lastId ? `?${previous ? "ending_before" : "starting_after"}=${encodeURIComponent(lastId)}` : ""}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await listAllproducts.json();

            setProducts(data.products);
            setHasMore(data.has_more);
            setHasPrevious(data.has_previous)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        productslist();

    }, [setProducts]);



    // Adding products to cart - function.
    function AddCartItem(cartItem: string) {

        const ItemExistInCart = cart.findIndex((item) =>

            item.price === cartItem);

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
                    }}>Next</button>
                )}
                {hasPrevious && (
                    <button onClick={() => {
                        const lastProduct = products[0]
                        productslist(lastProduct.product_id, true)
                    }}>Previous</button>
                )}
            </div>
        </div >
    )
}

export default Products