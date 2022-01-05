import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Results(props) {
    const [results, setResults] = useState("")
    let navigate = useNavigate();

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

    let data = []

    const handleClick = (event) => {
        console.log(event)
        console.log(event.target.childNodes[2].nodeValue)
        navigate(`/item/${event.target.childNodes[2].nodeValue}`)
    }

    if (results.length < 1) {
        return (
            <div>
                <h1>Loading Results...</h1>
            </div>
        )
    } else {

        for (let i = 0; i < 20 && i < results.Results.length; i++) {
            data.push(results.Results[i])
        }

        return (
            <div>
                <h1>Search Results (up to 20)</h1>
                <div className="stats">
                    <ul className="results">
                        {data.map((item) => (
                            <li key={item.ID} onClick={handleClick}>{item.Name} ({item.ID})</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}