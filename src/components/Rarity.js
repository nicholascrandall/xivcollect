const quality = (val) => {
    switch (val) {
        case 1:
            return "white";
        case 2:
            return "green";
        case 3:
            return "blue";
        case 4:
            return "purple";
        case 5:
            return "orange";
    }
}

export default function Rarity(props) {
    console.log(props);
    return (
        <>
            <p>{quality(1)}</p>
        </>
    )
}