import { Logo } from '../assets/images'
const PageLoading = () => {
	return (
		<div className='fixed right-0 left-0 top-0 bottom-0 inset-0 flex justify-center items-center'>
			<img
				className='page-loading'
				src={Logo}
				alt='Page loading image'
				width={100}
				height={100}
			/>
		</div>
	)
}

export default PageLoading
