import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext()

export default function AppContextProvider({children}){
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('Delhi');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleOnSearchChange = (searchData) => {
        setLocation(searchData.city)
    }
    const value = {
        data,
        setData,
        location,
        setLocation,
        loading,
        setLoading,
        errorMsg,
        setErrorMsg,
        handleOnSearchChange
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}