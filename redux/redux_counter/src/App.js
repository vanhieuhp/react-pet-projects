import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

function App() {
	const isAuth = useSelector(state => state.auth.isAuthenticated);

	return (
		<Fragment>
			{isAuth && <Header />}
			{!isAuth && <Auth />}
			<Counter />
		</Fragment>
	);
}

export default App;
