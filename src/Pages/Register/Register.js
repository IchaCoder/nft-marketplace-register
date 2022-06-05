import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Register = () => {
	return (
		<section className="register">
			<div className="bg-art"></div>
			<article className="register-lg">
				<div className="logo">
					<span style={{ color: "#de3163" }}>Lo</span>{" "}
					<span style={{ color: "#3498db" }}>go</span>
				</div>
				<p className="main">
					Get more things done with{" "}
					<span style={{ color: "#FED700" }}>Loggin</span> platform.
				</p>
				<p className="small">
					Access to the most powerfull tool in the entire design and web
					industry.
				</p>
				<nav>
					<NavLink
						style={({ isActive }) => {
							return { color: isActive ? "#de3163" : "#fff" };
						}}
						to="/"
					>
						Login{" "}
					</NavLink>
					<NavLink
						style={({ isActive }) => {
							return { color: isActive ? "#de3163" : "#fff" };
						}}
						to="signup"
					>
						Register{" "}
					</NavLink>
				</nav>
				<Outlet />
			</article>
		</section>
	);
};

export default Register;
