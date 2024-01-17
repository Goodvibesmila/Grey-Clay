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
    product: string,
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
            }} >
            {children}
        </UsersContext.Provider>
    )
}

export default UserProvider
