export default function Header() {
    return (
        <header>
            <img src="/src/main_contents/assets/react.svg" className="header-image" alt="React Logo"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}