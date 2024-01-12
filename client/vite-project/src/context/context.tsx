// import { useState, createContext, useContext, PropsWithChildren } from "react";


// Skapat ett Skelett/utkast för vad jag kan tänka mig att jag behöver för att skapa contextfilen. 

/*
interface Iprice {
    id: string,
    unit_amount: number,
}

interface Iproducts {
    id: string,
    name: string,
    default_price: Iprice,
    images: string[],
    description: "",
}


interface IusersContext {
    products: Iproducts[];
    setProducts: React.Dispatch<React.SetStateAction<Iproducts[]>>;
}


const defaultValues: IusersContext = {
    products: [],
    setProducts: () => { },
}


const UsersContext = createContext<IusersContext>(defaultValues);
// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => useContext(UsersContext)


const UserProvider = ({ children }: PropsWithChildren) => {

    const [products, setProducts] = useState("");
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
*/