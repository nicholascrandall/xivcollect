const quality = (val) => {
    switch (val) {
        case 1:
            return "Common";
        case 2:
            return "Scarce";
        case 3:
            return "Rare";
        case 4:
            return "Relic";
        case 7:
            return "Aetherial";
    }
}

const color = (val) => {
    switch (val) {
        case 1:
            return "Black";
        case 2:
            return "#20bc70";
        case 3:
            return "#2673c5";
        case 4:
            return "#7641af";
        case 7:
            return "#ff65ad";
    }
}

export default function Rarity(props) {
    return (
        <div className="rarity">
            <p>Rarity:</p>
            <p style={{color: color(props.val)}}>{quality(props.val)}</p>
        </div>
    )
}