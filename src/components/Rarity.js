const Rarity = ({ val }) => {
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
    return (
        <>
            <Rarity val="1" />
        </>
    )
}