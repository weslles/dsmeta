import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta"></img>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/tyrionnegro/?hl=pt-br">@José Weslles</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header