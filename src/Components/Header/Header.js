import {Link} from 'react-router-dom'
import './Header.css'
import logo from './UFMG.png'

function Header(){

    return(
        <div className='Header' >
            <div >
                <img src={logo} className='logo'/>
            </div>
            <div className='nome'>
                <h1>| Gabriel Henrique L. P. Dias</h1>
            </div>
            <div className='menu'>
                <ul className="list">
                    <li className='item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/Research">Research</Link>
                    </li>
                    <li className="item">
                        <Link to="/Team">Team</Link>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default Header