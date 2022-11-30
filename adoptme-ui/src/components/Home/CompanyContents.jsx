import React from 'react'

const CompanyContents = () => {
	var companies = [
		{
			title: 'HubSpot',
			summary:
				'HubSpot has positioned itself as a giant in the content marketing world. Brian Halligan and Dharmesh Shah originally created the company after they met as grad students at MIT. Ten years later, they have nearly 2,000 employees and are true leaders in the field of digital marketing.',
			link: '#',
		},
		{
			title: 'TED',
			summary:
				'Unless you’ve been hiding under a rock, you’re most likely familiar with TED talks. TED hosts conferences around the world where influencers and experts give short, timed talks about their area of specialization. These often engaging and informative videos are shared all over social media and in blog posts.',
			link: '#',
		},
		{
			title: 'Hawke Media',
			summary:
				'Hawke Media is a brand-focused agency based out of Santa Monica, California that offers a full range of digital marketing services for businesses of all shapes and sizes. Their content marketing specialities include email marketing, Facebook advertising, SEM, paid acquisition, design, influencer marketing, media buying, affiliate marketing, and more.',
			link: '#',
		},
		{
			title: 'KISSmetrics',
			summary:
				'KISSmetrics is a leader in data collection and analytics and has many services to support businesses of various sizes in their content marketing systems and strategy.',
			link: '#',
		},
		{
			title: 'Influence & Co.',
			summary:
				'Influence & Co. helps companies connect via truly engaging and innovative content. Their key offerings include Executive Branding, Content Marketing Strategy, and larger scale specific Content Projects such as Infographics and ebooks.',
			link: '#',
		},
	]

	return (
		<ul className="p-0 m-0 list-unstyled">
			{companies.map((item, index) => (
				<li className="mb-4 p-0 m-0 shadow p-3 bg-body rounded" key={index}>
					<h1 className="fs-3">{item.title}</h1>
					<p>{item.summary}</p>
					<a href={item.link} className="mt-auto  readMoreText">
						Read more
					</a>
				</li>
			))}
		</ul>
	)
}

export default CompanyContents
