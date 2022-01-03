import { useState } from 'react'
import NavBar from './NavBar'
import Search from './Search'
import Results from './Results.js'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("")

    console.log(`(Home) Term: ${searchTerm}`)
    
    return (
        <div>
            <NavBar />
            <h2>Search for an Item from FFXIV</h2>
            <Search setSearchTerm={setSearchTerm} />
            {searchTerm.length > 0 && <Results term={searchTerm} />}
        </div>
    )
}