import { useState, createContext, useContext, PropsWithChildren } from "react";


interface Product {
    id: string,
    title: string,
    price: number,
    image: string,
    description: "",
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
    const [password, setPassword] = useState("");
    const [customerOrder, setCustomerOrder] = useState<CustomerOrder[]>([]);


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
            }} >
            {children}
        </UsersContext.Provider>
    )
}

export default UserProvider
