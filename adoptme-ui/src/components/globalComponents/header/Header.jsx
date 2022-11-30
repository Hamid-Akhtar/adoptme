import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header id="header" className="b-header b-header--highlighted py-2">
			<nav class="navbar navbar-expand-md">
				<div class="container-fluid">
					<Link to="/">
						<div className="b-logo pull-left d-flex column-gap-10 align-items-center ">
							<a href="#top">
								<img src="../img/logo.png" alt="Logo" width="32" />
							</a>
							<a href="#top" className="b-logo__title routeText">
								<span>Adoptme.Org</span>
							</a>
						</div>
					</Link>
					<button
						class="navbar-toggler btn-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav ms-0 ms-md-auto ">
							<li class="nav-item">
								<Link to="/WhatWeDo">
									<span className="routeText ">
										<span className="text-uppercase">What</span>
										<span> we do</span>
									</span>
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/WhatWeAre">
									<span className="routeText">
										<span className="text-uppercase">Who</span>
										<span> we are</span>
									</span>
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/EventsAdoption">
									<span className="routeText">
										<span className="text-uppercase">Events</span>
										<span> adoption</span>
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
