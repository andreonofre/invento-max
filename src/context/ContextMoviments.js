import React, { useContext, useState } from "react";

export const ContextMoviments = React.createContext();

export function useMovimentsContext() {
    return useContext(ContextMoviments);
  }

//Children: tudo que estiver dentro do meu provider, FILHOS que terão acesso
export const ProviderMoviments = ({children}) => {
    const [moviments, setMoviments] = useState([]);
    return (
        <ContextMoviments.Provider value={{ moviments, setMoviments }}>
            {children}
        </ContextMoviments.Provider>
    ) 
}


export default ContextMoviments;