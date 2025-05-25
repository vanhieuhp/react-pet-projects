import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ChefClaude from './chef/ChefClaude.jsx';
import Essentials from './essentials/Essentials.jsx';
import ReactFunFacts from './react_funfact/ReactFunFacts.jsx';
import FormAction from './form_action/Form-Action.jsx';
import TravelJourney from './travel_journal/TravelJourney.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/Error.jsx';
import Product from './pages/Product.jsx';
import ProductDetail from './pages/ProductDetail.jsx'; // const routeDefinitions = createRoutesFromElements(

// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage />} />
// 		<Route path="/chef-claude" element={<ChefClaude />} />
// 		<Route path="/essentials" element={<Essentials />} />
// 		<Route path="/form-action" element={<FormAction />} />
// 		<Route path="/react-funfact" element={<ReactFunFacts />} />
// 		<Route path="/travel-journey" element={<TravelJourney />} />
// 	</Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/chef-claude', element: <ChefClaude /> },
			{ path: '/products', element: <Product /> },
			{ path: '/products/:productId', element: <ProductDetail /> },
			{ path: '/essentials', element: <Essentials /> },
			{ path: '/form-action', element: <FormAction /> },
			{ path: '/react-funfact', element: <ReactFunFacts /> },
			{ path: '/travel-journey', element: <TravelJourney /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
