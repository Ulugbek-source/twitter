import { Button, Heading, Input, Text } from '../../components'
import { Loading, Logo } from '../../assets/images'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Login = () => {
	const [_cookies, setCookie] = useCookies(['token'])
	const [loading, setLoading] = useState(false)
	function handleLogin(e) {
		setLoading(true)
		e.preventDefault()
		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
		}
		setTimeout(() => {
			setCookie('token', data)
		}, 1000)
	}
	return (
		<>
			<div className='flex justify-center mt-[60px] w-full h-[100vh] overflow-hidden'>
				<div className='w-[450px]'>
					<img
						className='mb-[36px]'
						src={Logo}
						alt='Site logo'
						width={50}
						height={41}
					/>
					<Heading
						type={'h1'}
						classList={'mb-[36px]'}
						title={'Log in to Twitter'}
					/>
					<form
						onSubmit={handleLogin}
						autoComplete='off'
						className='space-y-[25px] mb-[40px]'
					>
						<Input
							placeholder={'Phone number, email address'}
							name={'email'}
							classList={
								'py-[23px] pl-[20px] border-[1px] placeholder:text-[18px] placeholder:font-[Roboto] border-[#00000020] rounded-[6px] w-full outline-none'
							}
						/>
						<Input
							type='password'
							placeholder={'Password'}
							name={'password'}
							classList={
								'py-[23px] pl-[20px] border-[1px] placeholder:text-[18px] placeholder:font-[Roboto] border-[#00000020] rounded-[6px] w-full outline-none'
							}
						/>
						<Button>
							{loading ? (
								<img
									className='mx-auto scale-[2]'
									src={Loading}
									alt='Loading...'
									width={30}
									height={30}
								/>
							) : (
								'Log In'
							)}
						</Button>
					</form>
					<div className='flex justify-between'>
						<Text navigate={'#'} type={'Link'} title={'Forgot password?'} />
						<Text navigate={'#'} type={'Link'} title={'Sign up to Twitter'} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
