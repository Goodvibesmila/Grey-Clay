import "../styling/style.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
    return (
        <div className="headercontainer">
            <div className="headerbanner">
                <p>Enkla returer och byten</p>
                <p>Säkra betalningar</p>
                <p>Fri frakt inom Sverige</p>
            </div>
            <div className="headermenu">
                <p>GREY CLAY</p>
                <a href="">Shop</a>
                <a href="">Om oss</a>
                <a href="">Kontakt</a>
                <a href="">Skötselråd</a>
                {/* <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />*/}
            </div>
        </div>
    )
}

export default Header