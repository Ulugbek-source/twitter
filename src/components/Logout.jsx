import { useCookies } from 'react-cookie'
import { ProfileImage } from '../assets/images'
import { DotsIcon } from '../assets/icons'

const Logout = () => {
	const [cookies, removeCookies] = useCookies(['token'])
	function handleLogout() {
		const isConfirm = confirm('Do you want to leave?')
		if (isConfirm) {
			removeCookies('token')
		}
	}
	return (
		<div className='flex items-center justify-between pb-[15px]'>
			<div className='flex items-center gap-[10px]'>
				<img
					className='w-[60px] h-[60px]'
					src={ProfileImage}
					alt='Profile image'
				/>
				<div>
					<strong>{cookies.token.email}</strong>
					<p className='opacity-60'>{cookies.token.email}</p>
				</div>
			</div>
			<button className='cursor-pointer' onClick={handleLogout}>
				<DotsIcon />
			</button>
		</div>
	)
}

export default Logout
