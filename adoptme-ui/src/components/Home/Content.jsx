import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CompanyContents from './CompanyContents'
import Programs from './Programs'
import Volunteers from './Volunteers'

const Content = () => {
	const [tab, setTab] = useState('program')
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('http://54.95.117.11:8080/testimonials').then((res) => {
			setData(res.data)
		})
	}, [])

	return (
		<>
			<div className="container-fluid mx-0 px-0 mb-4">
				<img className="w-100 mx-0 px-0" src="./img/dogs.jpg" alt="Logo" />
			</div>
			<div className="container-fluid">
				<div className="container">
					<section className="b-section mb-4">
						<div className="row">
							<div className="col-md-6 col-lg-4 col-xl-3 ps-0 mb-4 mb-md-0">
								<h1 className="fs-3 mb-3">Volunteers</h1>
								<div className="valanteerContent">
									<Volunteers />
								</div>
							</div>
							<div className="col-md-6 col-lg-8 col-xl-9  p-0 m-0">
								<h1 className="fs-2">Testimonials of the month</h1>
								<video className="w-100" src={data[0]?.vedio} controls>
									Sorry, your browser doesn't support HTML5 <code>video</code>,
									but you can download this video from the
								</video>
							</div>
						</div>
					</section>

					<section className="b-section b-section--programs">
						<div className="row">
							<div className="p-0 m-0">
								<div id="js-b-tabs-container" className="b-tabs-container">
									<ul className="nav nav-tabs mb-3" role="tablist">
										<li role="presentation" className="">
											<a
												id="program"
												href="#programs"
												aria-controls="home"
												role="tab"
												data-toggle="tab"
												className={tab === 'program' ? 'activeLink' : ''}
												onClick={() => setTab('program')}
											>
												Programs
											</a>
										</li>
										<li role="presentation">
											<a
												id="companies"
												href="#associated-companies"
												aria-controls="profile"
												role="tab"
												data-toggle="tab"
												className={tab === 'companies' ? 'activeLink' : ''}
												onClick={() => setTab('companies')}
											>
												Associated Companies
											</a>
										</li>
									</ul>
									<div className="tab-content">
										<div
											role="tabpanel"
											className={tab === 'program' ? 'd-block' : 'd-none'}
											id="programData"
										>
											<Programs />
										</div>
										<div
											role="tabpanel"
											className={tab === 'companies' ? 'd-block' : 'd-none'}
											id="companiesData"
										>
											<CompanyContents />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Content
