import { Button, Heading, Input, Text } from '../../components'
import { Logo } from '../../assets/images'

const Login = () => {
	return (
		<>
			<div className='flex justify-center items-center h-[100vh]'>
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
					<form autoComplete='off' className='space-y-[25px] mb-[40px]'>
						<Input
							placeholder={'Phone number, email address'}
							name={'login'}
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
						<Button
							classList={
								'py-[18px] bg-[#1DA1F2] rounded-[76px] w-full font-bold font-[Roboto] text-[18px] text-white cursor-pointer'
							}
							title={'Log In'}
						/>
					</form>
					<div className='flex justify-between'>
						<Text type={'span'} title={'Forgot password?'} />
						<Text type={'span'} title={'Sign up to Twitter'} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
