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
            return "#70c081";
        case 3:
            return "Blue";
        case 4:
            return "#513492";
        case 7:
            return "#ff68c1";
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