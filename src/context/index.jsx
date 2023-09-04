import React from 'react'



const Context = React.useContext()

const ContextProvider = ({ children }) => {
    // Logical
    return (
        <Context.Provider value={{
            // Logical items
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }