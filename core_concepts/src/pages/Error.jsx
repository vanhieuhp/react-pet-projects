import MainNavigation from '../components/MainNavigation.jsx';

export default function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<main className="default-page">
				<h1>An error occurred!</h1>
				<p>Could not find this page!</p>
			</main>
		</>
	);
}
