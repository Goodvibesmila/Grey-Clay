import { useState, createContext, useContext, PropsWithChildren } from "react";



// INTERFACES
interface Iprice {
    id: string,
    unit_amount: number,
}

interface Iproducts {
    id: string,
    title: string,
    price: Iprice,
    images: string[],
    description: "",
}


interface IusersContext {
    products: Iproducts[];
    setProducts: React.Dispatch<React.SetStateAction<Iproducts[]>>;
}

// standardvärden för userscontext
const defaultValues: IusersContext = {
    products: [],
    setProducts: () => { },
}


// Skapar en react context.
const UsersContext = createContext<IusersContext>(defaultValues);
// eslint - disable - next - line react - refresh / only -export -components
export const useUsersContext = () => useContext(UsersContext)



// Här skapas en anpassad hook, för att använda context-värden i andra komponenter
const UserProvider = ({ children }: PropsWithChildren) => {

    const [products, setProducts] = useState<Iproducts[]>([]);
    return (
        <UsersContext.Provider
            value={{
                products,
                setProducts,
            }} >
            {children}
        </UsersContext.Provider>
    )
}

export default UserProvider
