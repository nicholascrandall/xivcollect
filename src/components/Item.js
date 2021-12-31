import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Rarity from './Rarity'

export default function Item() {
    const [item, setItem] = useState("")

    useEffect(() => {
        const url = "https://xivapi.com/item/1675"

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

    console.log(item)

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
                <h2>Item Show Page</h2>
                <p>{item.Name} ID: {item.ID} </p>
                <p>Job(s): {item.ClassJobCategory.Name} </p>
                <p>{item.BaseParam0.Name}: {item.BaseParamValue0} </p>
                <Rarity val={item.Rarity} />
            </div>
        )
    }
    }