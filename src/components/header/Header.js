import Headerbg from '../../assets/img/header.png';
import "./Header.css"

function Header() {
    return <header className="header">
        <img src={Headerbg} alt="Org" />
    </header>
}

export default Header