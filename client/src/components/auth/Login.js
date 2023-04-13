import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("SUCCESS");
	};

	return (
		<section className='container'>
			{/* <div className='alert alert-danger'>Invalid credentials</div> */}
			<h1 className='large text-heading'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign into Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input
					type='submit'
					className='btn btn-heading'
					value='Login'
				/>
			</form>
			<p className='my-1'>
				Don't have an account?{" "}
				<Link className='text-heading' to='/register'>
					Sign Up
				</Link>
			</p>
		</section>
	);
}

export default Login;
