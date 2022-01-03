import { useState } from 'react'
import NavBar from './NavBar'
import Search from './Search'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("")

    console.log(`Search Term: ${searchTerm}`)

    return (
        <div>
            <NavBar />
            <h2>Welcome to the home page!</h2>
            <Search setSearchTerm={setSearchTerm} />
        </div>
    )
}