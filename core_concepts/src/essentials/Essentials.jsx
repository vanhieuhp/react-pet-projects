import "./styles/essentials-style.css"
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function Essentials() {

    return (<div>
        <Header/>
        <main>
            <CoreConcepts/>
            <Examples/>
        </main>
    </div>);
}

export default Essentials;
