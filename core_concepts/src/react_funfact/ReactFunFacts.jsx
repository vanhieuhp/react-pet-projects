import Navbar from './components/Navbar.jsx';
import FunFacts from './components/FunFacts.jsx';
import './styles/react-funfact.css';

export default function ReactFunFacts() {
	return (
		<div id="funfact-container">
			<Navbar />
			<FunFacts />
		</div>
	);
}
