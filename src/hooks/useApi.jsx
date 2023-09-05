import React from 'react'

const useApi = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const urlApi = 'https://rickandmortyapi.com/api/character'
            try {
                const response = await fetch(urlApi)
                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                setError(err.message || "An error occurred")  // store only the error message
                console.log(`Error fetching the data with ${err.message}`)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return {
        apiState: { data, loading, error }
    }
}

export { useApi }
