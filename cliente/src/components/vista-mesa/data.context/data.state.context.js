import React, { createContext, useContext, useState } from "react";

const DataStateContext = createContext();

export const useDataState = () => useContext(DataStateContext);

export const DataProvider = ({ children }) => {
    const [mesaData, setMesaData] = useState([]); 
    return (
        <DataStateContext.Provider value={{ mesaData, setMesaData }}>
            {children}
        </DataStateContext.Provider>
    );
};