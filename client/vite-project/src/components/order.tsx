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
                        <div className="orders">
                            <div className="ordercontent" key={orderIndex}>

                                <p> <b>Date: </b>{new Date(order.created).toLocaleDateString("sv-SE")}</p>
                                <p> <b>Time:</b> {new Date(order.created).toLocaleTimeString("sv-SE")}</p>
                                {order.products.map((product: Order, productIndex: number) => (
                                    <div key={productIndex}>
                                        <p> <b>Price:</b> {product.price} kr/styck </p>
                                        <p><b>Quantity: </b>{product.quantity} </p>
                                        <p> <b>Product:</b>  {product.product} </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    ))}
                </ul>
            ) : (
                <p>Something went wrong</p>
            )
            }

        </div>
    )
}

export default CustomerOrders