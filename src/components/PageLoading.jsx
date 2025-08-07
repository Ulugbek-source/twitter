import { Logo, LoadingActive } from '../assets/images'
const PageLoading = ({ isLoading }) => {
	return (
		<div
			className={`${
				isLoading ? 'absolute' : 'fixed'
			} right-0 left-0 top-0 bottom-0 inset-0 flex justify-center items-center`}
		>
			<img
				className={`${!isLoading && 'page-loading'}`}
				src={isLoading ? LoadingActive : Logo}
				alt='Page loading image'
				width={100}
				height={100}
			/>
		</div>
	)
}

export default PageLoading
