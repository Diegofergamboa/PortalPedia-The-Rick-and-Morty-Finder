import React from 'react'
import { useApi } from '../hooks/useApi'


const Context = React.createContext()

const ContextProvider = ({ children }) => {

    const { apiState } = useApi()
    const { data, loading, error } = apiState

    //const [charactersSearched, setCharactersSearched] = React.useState([])
    const [randomCharacters, setRandomCharacters] = React.useState([])

    const randomCharactersRender = (array, newLength) => {
        const randomCharactersArray = []

        // Obtaining a random number from 0 to the array length 
        function randomIndex(array) {
            return Math.floor(Math.random() * array.length)
        }

        // Pushing a random character from all the data
        while (randomCharactersArray.length < newLength) {
            const randomCharacter = array[randomIndex(array)]
            if (!randomCharactersArray.includes(randomCharacter)) {
                randomCharactersArray.push(randomCharacter)
            }
        }

        return randomCharactersArray
    }


    React.useEffect(() => {
        if (data && data.results) {
            const charsToObtain = 4
            const randomChars = randomCharactersRender(data.results, charsToObtain)
            setRandomCharacters(randomChars)
        }
    }, [data])


    return (
        <Context.Provider value={{
            randomCharacters,
            loading,
            error
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }