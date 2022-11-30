import React from 'react'

const Volunteers = () => {
	var volunteer = [
		{
			number: '3500',
			title: 'REGISTERED',
		},
		{
			number: '5M',
			title: 'INVESTED',
		},
		{
			number: '1M',
			title: 'USERS',
		},
		{
			number: '10M',
			title: 'ACTIVE',
		},
	]

	return (
		<ul className="row justify-content-around align-items-ccenterr p-0 m-0 list-unstyled">
			{volunteer.map((item, index) => (
				<li
					className="   border-top border-5 border-danger text-center col-5 col-lg-10  mb-4 p-0 m-0 shadow-lg p-2 bg-body rounded"
					key={index}
				>
					<h1 className="fs-4 pb-2">{item.number}</h1>
					<p className="p-0 m-0">{item.title}</p>
					<p className="p-0 m-0 small text-primary">{item.about}</p>
				</li>
			))}
		</ul>
	)
}

export default Volunteers
