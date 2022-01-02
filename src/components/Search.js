import { useState } from 'react'

export default function Search() {
    const [itemID, setItemID] = useState(1675)
    const [searched, setSearched] = useState(false)


    const handleChange = (event) => {
        event.persist();
        setItemID(event.target.value)
        console.log(itemID)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearched(true)
    }

    if (searched === true) {
        return <div><h2 style={{color: "red"}}>SEARCHED</h2></div>
    }

    return (
        <div className="searchContainer">
            <h2>Search Bar goes here</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="number"
                className="searchInput"
                value={itemID}
                placeholder="Enter a Final Fantasy XIV Item ID"
                onChange={handleChange}
                />
            </form>
        </div>
    )
}