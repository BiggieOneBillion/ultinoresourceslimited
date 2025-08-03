import { createContext, useState, useEffect, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {


    const [isChecked, setIsChecked] = useState(false)

    const handleIsChecked = () => {
        setIsChecked(!isChecked)
    }

    const [digits, setDigits] = useState(undefined)

    const handleSetDigit = (id) => {
        setDigits(id)
    }

    const [allow, setAllow] = useState(false)

    const handleAllow = () => {
        setAllow(true)
    }

    // console.log(digit);


    return (
        <GlobalContext.Provider 
        value={{
          isChecked,
          handleIsChecked,
          digits,
          setDigits,
          handleSetDigit,
          handleAllow,
          allow
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext)
}