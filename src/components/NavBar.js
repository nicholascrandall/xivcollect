import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navBar'>
            <h1>
                <Link to="/">XIV Collect</Link>
            </h1>
        </div>
    )
}