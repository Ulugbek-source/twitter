import { useState } from 'react'
import { Logo } from '../assets/images'
import { Button, Logout, NavItem, routeList } from '../components'

const Navbar = () => {
	const [activeNav, setActiveNav] = useState('/')

	return (
		<div className='w-[22%] pt-[31px] pr-[15px] h-screen overflow-y-auto scroll-none'>
			<img className='mb-[40px]' src={Logo} alt='Logo' width={40} height={33} />
			<nav className='flex flex-col gap-[32px] mb-[30px]'>
				{routeList.map(item => (
					<NavItem
						key={item.id}
						setActiveNav={setActiveNav}
						activeNav={activeNav}
						item={item}
					/>
				))}
			</nav>
			<Button classList={'!py-[12px] !w-[230px] mb-[180px]'}>Tweet</Button>
			<Logout />
		</div>
	)
}

export default Navbar
