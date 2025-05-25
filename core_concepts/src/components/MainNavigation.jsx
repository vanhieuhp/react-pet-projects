import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
	return (
		<header id="main-navigation">
			<nav>
				<ul className="main-navigation-list">
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/products">Product</NavLink>
					</li>
					<li>
						<NavLink to="/chef-claude">Chef Claude</NavLink>
					</li>
					<li>
						<NavLink to="/essentials">Essentials</NavLink>
					</li>
					<li>
						<NavLink to="/form-action">Form Action</NavLink>
					</li>
					<li>
						<NavLink to="/react-funfact">React Fun Fact</NavLink>
					</li>
					<li>
						<NavLink to="/travel-journey">Travel Journey</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
