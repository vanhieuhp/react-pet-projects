import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	function navigateHandle() {
		navigate('/essentials');
	}

	return (
		<main className="default-page">
			<h1>Home</h1>
			<p>This is home page</p>
			<button onClick={navigateHandle}>Essentials</button>
		</main>
	);
}
