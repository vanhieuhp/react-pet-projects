import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
	const params = useParams();

	return (
		<main className="default-page">
			<h1>Product Page</h1>
			<p>This is the product page!</p>
			<p>productId: {params.productId}</p>
			<Link to=".." relative="path">
				Back
			</Link>
		</main>
	);
}
