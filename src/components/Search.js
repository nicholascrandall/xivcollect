import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searched, setSearched] = useState(false)
    let navigate = useNavigate();

    const handleChange = (event) => {
        event.persist();
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearchTerm(searchTerm)
        navigate("/search")
    }

    console.log(`Search Term: ${searchTerm}`)

    return (
        <div className="searchContainer">
            <h2>Search Bar goes here</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="search"
                className="searchInput"
                value={searchTerm}
                placeholder="Enter a Final Fantasy XIV Item ID"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}