import { useState } from 'react'
import { Logo } from '../assets/images'
import { NavItem, routeList } from '../components'

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('/')
	return (
		<div className='w-[20%] pt-[31px] pr-[15px] h-[100vh] overflow-y-auto'>
			<img className='mb-[40px]' src={Logo} alt='Logo' width={40} height={33} />
			<nav className='flex flex-col gap-[32px]'>
				{routeList.map(item => (
					<NavItem
						setActiveNav={setActiveNav}
						activeNav={activeNav}
						item={item}
					/>
				))}
			</nav>
		</div>
	)
}

export default Navbar
