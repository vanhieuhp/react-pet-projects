import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
	const {
		data: loadedMeals,
		loading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (loading) {
		return <p className="center">Loading Meals...</p>;
	}

	if (error) {
		return <Error title="Failed to load meals" message={error} />;
	}

	return (
		<ul id="meals">
			{loadedMeals.map(meal => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}
