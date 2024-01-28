import { useUsersContext } from "../context/context";
import "../styling/header.css"

function Cart() {
    const {
        cart,
    } = useUsersContext();

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCondition = totalQuantity > 0;

    return (
        <div>
            <div>
                <ul>
                    {cartCondition && (
                        <p className="cartContainer">{totalQuantity}</p>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Cart