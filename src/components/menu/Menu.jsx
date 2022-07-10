import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return(
        <ul className="menu">
            <li className="item">
                <Link className="link" to="/">Home</Link>
            </li>
            <li className="item">
                <Link className="link" to="/comentarios">Comentários</Link>
            </li>
            <li className="item">
                <Link className="link" to="/portfolio">Portfolio</Link>
            </li>            
        </ul>

    )
}

export default Menu