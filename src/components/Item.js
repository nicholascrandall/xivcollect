import { useEffect, useState } from 'react'
import NavBar from './NavBar'

export default function Item() {
    const [item, setItem] = useState("")

    useEffect(() => {
        const url = "https://xivapi.com/item/1675"

        const fetchData = async() => {
            try {
                const response = await fetch(url, {mode: 'cors'})
                const json = await response.json()
                console.log(json);
                // setItem(json.item.etc)
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData()
    }, [])

    console.log(item)

    return (
        <div>
            <NavBar />
            <h2>Item Show Page</h2>
        </div>
    )
}