import imgCoreConcepts from '/src/essentials/assets/react-core-concepts.png';

export default function Header() {
	return (
		<>
			<header className="essentials-header">
				<img src={imgCoreConcepts} alt="Stylized atom" />
				<h1>React Essentials</h1>
				<p>Fundamental React concepts you will need for almost any app you are going to build!</p>
			</header>
			<main className="essentials-main">
				<h2>Time to get started!</h2>
			</main>
		</>
	);
}
