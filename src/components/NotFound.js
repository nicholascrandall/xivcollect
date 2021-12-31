import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <NavBar />
            <div className="notFound">
                <h2>Page Not Found</h2>
                <p>
                    <Link to="/">Return Home</Link>
                </p>
            </div>
        </div>
    )
}