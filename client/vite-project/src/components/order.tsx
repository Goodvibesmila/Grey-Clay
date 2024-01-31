import { useUsersContext, Order, CustomerOrder } from "../context/context";
import { useEffect } from "react"



// List of orders for one customer.
function CustomerOrders() {

    const {
        email,
        customerOrder,
        setCustomerOrder,
    } = useUsersContext();


    useEffect(() => {
        async function orderList() {



            try {
                const ListAllOrders = await fetch(`/api/order/${email}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await ListAllOrders.json();
                setCustomerOrder(data);

            } catch (error) {
                console.error(error);
            }

        }

        if (email) {
            orderList();
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    return (
        <div>

            {customerOrder.length > 0 ? (
                <ul>
                    {customerOrder.map((order: CustomerOrder) => (
                        <div className="orders" key={order._id}>
                            <div className="ordercontent">

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