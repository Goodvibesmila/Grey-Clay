import { useUsersContext } from "../context/context";


function Cart() {
    const {
        cart,
    } = useUsersContext();

    const cartCondition = cart.length > 0;

    return (
        <div>
            <div className="cartContainer">
                <ul>
                    {cartCondition ? (
                        <p>{cart.length} st</p>
                    ) : null}

                </ul>
            </div>

        </div>
    )
}

export default Cart