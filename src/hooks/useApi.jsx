import React from "react";


const useApi = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const urlApi = 'https://rickandmortyapi.com/api/character'
            try {
                const response = await fetch(`${urlApi}`)
                const result = await response.json()
                return (response.ok) && setData(result)
            } catch (error) {
                setError(error)
                console.log(`Error fetching the data with ${error}`)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        data,
        setData,
        error,
        setError,
        loading,
        setLoading
    }

}

export { useApi }

