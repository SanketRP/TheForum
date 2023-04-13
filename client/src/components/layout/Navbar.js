import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='bi bi-terminal'> </i> The Forum
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='!#'>Engineers</Link>
				</li>
				<li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link className='login' to='/login'>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
