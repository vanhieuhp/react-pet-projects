import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import './styles/travel-jouney.css';
import data from './assets/data.js';

export default function TravelJourney() {
	const entryElements = data.map(entry => {
		return <Entry key={entry.id} entry={entry} />;
	});

	return (
		<div id="travel-journey">
			<Header />
			<main className="container">{entryElements}</main>
		</div>
	);
}
