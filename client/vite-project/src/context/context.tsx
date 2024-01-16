import { useState, createContext, useContext, PropsWithChildren } from "react";


interface Product {
    id: string,
    title: string,
    price: number,
    image: string,
    description: "",
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
            }} >
            {children}
        </UsersContext.Provider>
    )
}

export default UserProvider
