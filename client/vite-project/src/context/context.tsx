import { useState, createContext, useContext, PropsWithChildren } from "react";


interface Product {
    id: string,
    title: string,
    price: number,
    image: string,
    description: "",
    product_id: string,
}

interface CartItems {
    quantity: number,
    price: string,
}

export interface Order {
    product: string,
    quantity: number,
    price: number,
}

export interface CustomerOrder {
    created: number,
    customer: string,
    products: Order[],
}


interface Customer {
    id: string,
    name: string,
    email: string,
}


interface IusersContext {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    registerCustomer: string;
    setregisterCustomer: React.Dispatch<React.SetStateAction<string>>;
    registerPassword: string;
    setregisterPassword: React.Dispatch<React.SetStateAction<string>>;
    registerEmail: string;
    setregisterEmail: React.Dispatch<React.SetStateAction<string>>;
    cart: CartItems[];
    setCart: React.Dispatch<React.SetStateAction<CartItems[]>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    isLoggedin: boolean;
    setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    customerOrder: CustomerOrder[];
    setCustomerOrder: React.Dispatch<React.SetStateAction<CustomerOrder[]>>;
    customer: Customer;
    setCustomer: React.Dispatch<React.SetStateAction<Customer>>
    formSubmitted: boolean;
    setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
    customerExists: boolean;
    setCustomerExists: React.Dispatch<React.SetStateAction<boolean>>;
    authorize: () => Promise<void>
}

// standardvärden för userscontext
const defaultValues: IusersContext = {
    products: [],
    setProducts: () => { },
    registerCustomer: "",
    setregisterCustomer: () => { },
    registerPassword: "",
    setregisterPassword: () => { },
    registerEmail: "",
    setregisterEmail: () => { },
    cart: [],
    setCart: () => [],
    email: "",
    setEmail: () => { },
    username: "",
    setUsername: () => { },
    isLoggedin: false,
    setIsLoggedin: () => { },
    password: "",
    setPassword: () => { },
    customerOrder: [],
    setCustomerOrder: () => { },
    customer: { id: "", name: "", email: "" },
    setCustomer: () => { },
    formSubmitted: false,
    setFormSubmitted: () => { },
    customerExists: false,
    setCustomerExists: () => { },
    authorize: async (): Promise<void> => { },
}


// Skapar en react context.
const UsersContext = createContext<IusersContext>(defaultValues);
// eslint - disable - next - line react - refresh / only -export -components
export const useUsersContext = () => useContext(UsersContext)



// Här skapas en anpassad hook, för att använda context-värden i andra komponenter
const UserProvider = ({ children }: PropsWithChildren) => {


    const [products, setProducts] = useState<Product[]>([]);
    const [registerCustomer, setregisterCustomer] = useState("");
    const [registerPassword, setregisterPassword] = useState("");
    const [registerEmail, setregisterEmail] = useState("");
    const [cart, setCart] = useState<CartItems[]>([]);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [password, setPassword] = useState("");
    const [customerOrder, setCustomerOrder] = useState<CustomerOrder[]>([]);
    const [customer, setCustomer] = useState<Customer>({ id: "", name: "", email: "" });
    const [customerExists, setCustomerExists] = useState(false)



    // FUNCTIONS

    const authorize = async (): Promise<void> => {
        try {
            const response = await fetch("api/auth")
            const loggedincustomer = await response.json()
            setCustomer(loggedincustomer)
            if (loggedincustomer.email) {
                setIsLoggedin(true)
                setUsername(loggedincustomer.name)
                setEmail(loggedincustomer.email)

            } else {
                setIsLoggedin(false)
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <UsersContext.Provider
            value={{
                products,
                setProducts,
                registerCustomer,
                setregisterCustomer,
                registerPassword,
                setregisterPassword,
                registerEmail,
                setregisterEmail,
                cart,
                setCart,
                email,
                setEmail,
                username,
                setUsername,
                isLoggedin,
                setIsLoggedin,
                password,
                setPassword,
                customerOrder,
                setCustomerOrder,
                customer,
                setCustomer,
                formSubmitted,
                setFormSubmitted,
                customerExists,
                setCustomerExists,
                authorize,
            }} >
            {children}
        </UsersContext.Provider>
    )
}


export default UserProvider
