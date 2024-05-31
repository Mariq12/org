import "./Footer.css";
import Logo from '../../assets/img/Logo.png';
import FooterImage from '../../assets/img/footer.png';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: `url(${FooterImage})` }}>
            <nav>
                <ul className='redes'>
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=100084487023873'>
                            <FaFacebook className="image"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Flor_Maria_LP'>
                            <FaTwitter className="image"/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/flormarialabandapuchaicela'>
                            <FaInstagram className="image"/>
                        </a>
                    </li>
                </ul>
            </nav>
            <figure>
                <img src={Logo} alt='org' />
            </figure>
            <section>
                <p><strong>Desarrollado por Alura</strong></p>
                <p className="footer__text">Modificado por Flor María L.P.</p>
            </section>
        </footer>
    );
};

export default Footer;

