import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Rarity from './Rarity'

export default function Item() {
    const [item, setItem] = useState("")

    useEffect(() => {
        const url = "https://xivapi.com/item/1675"
        // 34885
        // 1675
        // 19047
        // 1900

        const fetchData = async() => {
            try {
                const response = await fetch(url, {mode: 'cors'})
                const json = await response.json()
                console.log(json);
                setItem(json)
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData()
    }, [])

    if (item.length < 1) {
        return (
            <div>
                <h1>Page is Loading</h1>
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <h2>{item.Name} ID: {item.ID} </h2>
                <p>Job(s): {item.ClassJobCategory.Name} </p>

                {/* <ul>
                    <li>{item.Stats.DirectHitRate.NQ}</li>
                </ul> */}

                <Rarity val={item.Rarity} />
            </div>
        )
    }
    }