import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: '1',
		title: 'My first book',
		price: 6,
		description: 'This is a first product - amazing!',
	},
	{
		id: '2',
		title: 'My second book',
		price: 12,
		description: 'This is a second product - amazing!',
	},
	{
		id: '3',
		title: 'My third book',
		price: 18,
		description: 'This is a third product - amazing!',
	},
];

const Products = props => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map(product => (
					<ProductItem
						id={product.id}
						key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
