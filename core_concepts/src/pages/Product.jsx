import { Link } from 'react-router-dom';
import classes from './Product.module.css';

const PRODUCTS = [
	{ id: 'p1', title: 'Product 1' },
	{ id: 'p2', title: 'Product 2' },
	{ id: 'p3', title: 'Product 3' },
];

export default function Product() {
	return (
		<main className={classes.products}>
			<h1>Product Page</h1>
			<ul className={classes['product-list']}>
				{PRODUCTS.map(prod => (
					<li key={prod.id} className={classes['product-item']}>
						<Link to={`/products/${prod.id}`} className={classes['product-link']}>
							{prod.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
