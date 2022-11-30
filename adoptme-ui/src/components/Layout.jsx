import { Outlet } from 'react-router-dom'
import Footer from './globalComponents/footer/Footer'
import Header from './globalComponents/header/Header'

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
