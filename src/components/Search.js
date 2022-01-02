import { useState } from 'react'

export default function Search(props) {
    const [itemID, setItemID] = useState("")
    const [searched, setSearched] = useState(false)

    const handleChange = (event) => {
        event.persist();
        setItemID(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearchTerm(itemID)
        setSearched(true)
    }

    if (searched === true) {
        return (
            <div>
                <h2 style={{color: "red"}}>SEARCHED</h2>
                <p>{itemID}</p>
            </div>
        )
    }

    console.log(`Item ID: ${itemID}`)

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