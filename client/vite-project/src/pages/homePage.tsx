import Header from "../components/header"
import "../styling/style.css"


function HomePage() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <nav>
                <span>My pages</span>
            </nav>
            <div className="bodycontainer">

            </div>

        </div>
    )
}

export default HomePage;