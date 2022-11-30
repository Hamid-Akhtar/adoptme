import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Programs = () => {
	const [programs, setPrograms] = useState([])

	useEffect(() => {
		axios.get('http://54.95.117.11:8080/programs').then((res) => {
			setPrograms(res.data)
			// setLoading(false)
		})
	}, [])

	return (
		<ul className="p-0 m-0">
			{programs?.map((item) => (
				<li className="row p-0 m-0 mb-4 py-2" key={item?.id}>
					<div className="col-12 col-md-3 col-xl-2 ps-0 ms-0">
						<img
							className="card-img mx-auto mx-md-0"
							src={item?.image}
							alt="program img"
						/>
					</div>
					<div className="col-12 col-md-9 col-xl-10 ps-0 ps-md-3 pe-0 me-0 mt-3 mt-md-0">
						<h1>{item?.name}</h1>
						<p>{item?.description}</p>
						<a href="#" className="mt-auto text-decoration-none readMoreText">
							Read more
						</a>
					</div>
				</li>
			))}
		</ul>
	)
}

export default Programs
