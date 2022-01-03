import { useEffect, useState } from 'react'

export default function Results(props) {
    const [results, setResults] = useState("")

    useEffect(() => {
        const url = `https://xivapi.com/search?string=${props.term}`
        console.log(url)

        const fetchData = async() => {
            try {
                const response = await fetch(url, {mode: 'cors'})
                const json = await response.json()
                console.log(json);
                setResults(json)
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData()
    }, [])

    if (results.length < 1) {
        return (
            <div>
                <h1>Loading Results...</h1>
            </div>
        )
    } else {
        return (
            <h1>Search Results</h1>
        )
    }
}