export default function Stats(props) {
    const stats = props.stats
    
    let keys = []
    let names = []
    
    for (const stat in stats) {
        keys.push(stats[stat])
        names.push(stat)
    }
    
    return (
        <div className="statContainer">
            <div className="stats">
                <h3>Stats</h3>
                <ul>
                    {keys.map((stat, index) => (
                        <li key={stat.ID}>{names[index]}: {stat.NQ}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}