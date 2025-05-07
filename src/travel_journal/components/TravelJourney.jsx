import Header from "./Header.jsx";
import Entry from "./Entry.jsx";
import "../styles/travel-jouney.css";
import data from "../assets/data.js";

export default function TravelJourney() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}