import { useUsersContext, Order, CustomerOrder } from "../context/context";
import { useEffect } from "react"

function CustomerOrders() {

    const {
        email,
        customerOrder,
        setCustomerOrder,
    } = useUsersContext();



    useEffect(() => {

        async function orderList() {

            try {
                const ListAllOrders = await fetch(`http://localhost:3000/api/order/${email}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await ListAllOrders.json();
                console.log(data)
                setCustomerOrder(data);


            } catch (error) {
                console.error("Ett fel uppstod:", error);
            }
        }

        orderList();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    return (
        <div>

            {customerOrder.length > 0 ? (
                <ul>
                    {customerOrder.map((order: CustomerOrder, orderIndex: number) => (
                        <li key={orderIndex}>
                            <p>Datum: {new Date(order.created).toLocaleDateString("sv-SE")}</p>
                            <p>Tid: {new Date(order.created).toLocaleTimeString("sv-SE")}</p>
                            {order.products.map((product: Order, productIndex: number) => (
                                <div key={productIndex}>
                                    <p>  Product: {product.product} - Antal: {product.quantity} <span className="confirmationprice">Pris: {product.price} kr/styck </span> </p>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Något gick fel</p>
            )
            }

        </div>
    )
}

export default CustomerOrders