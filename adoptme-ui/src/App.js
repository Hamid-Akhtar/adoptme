import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventsAdoption from './components/eventsAdoption/EventsAdoption.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout.jsx'
import NoPage from './components/NoPage.jsx'
import WhatWeAre from './components/whatWeAre/WhatWeAre.jsx'
import WhatWeDo from './components/whatWeDo/WhatWeDo.jsx'
import './css/style.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="WhatWeDo" element={<WhatWeDo />} />
					<Route path="WhatWeAre" element={<WhatWeAre />} />
					<Route path="EventsAdoption" element={<EventsAdoption />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
