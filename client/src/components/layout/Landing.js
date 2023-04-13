import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1 className='x-large'>
						<i className='bi bi-terminal'></i> The Forum
					</h1>
					<p className='lead'>
						Create a engineer profile/portfolio, share posts
						<br />
						and get help from other engineers
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-success'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
