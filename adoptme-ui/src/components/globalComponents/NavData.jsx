import React from 'react'
import { Link } from 'react-router-dom'

const NavData = () => {
	return (
		<div className="container px-0">
			<div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
				<div className="d-flex justify-content-start justify-content-sm-center justify-content-md-start align-items-center">
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
				</div>
				<nav className="px-0 b-navigation pull-right pt-3  pt-sm-0">
					<ul className="p-0 m-0 d-flex column-gap-20 flex-column flex-sm-row justify-content-between text-center  text-md-end ">
						<li className="px-0 mx-0">
							<Link to="/WhatWeDo">
								<span className="routeText ">
									<span className="text-uppercase">What</span>
									<span> we do</span>
								</span>
							</Link>
						</li>
						<li className="px-0 mx-0">
							<Link to="/WhatWeAre">
								<span className="routeText">
									<span className="text-uppercase">Who</span>
									<span> we are</span>
								</span>
							</Link>
						</li>
						<li className="px-0 mx-0">
							<Link to="/EventsAdoption">
								<span className="routeText">
									<span className="text-uppercase">Events</span>
									<span> adoption</span>
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default NavData
