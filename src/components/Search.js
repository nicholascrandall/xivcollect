import { useState } from 'react'

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (event) => {
        event.persist();
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearchTerm(searchTerm)
    }

    console.log(`Search Term: ${searchTerm}`)

    return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit}>
                <input
                type="search"
                className="searchInput"
                value={searchTerm}
                placeholder="Search for an Item from FFXIV"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}