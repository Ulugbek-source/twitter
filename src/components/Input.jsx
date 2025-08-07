const Input = ({
	placeholder,
	name,
	classList = '',
	type = 'text',
	icon = null,
}) => {
	return (
		<div className='relative'>
			{icon && (
				<span className='absolute left-3 top-[14px] text-gray-400'>{icon}</span>
			)}
			<input
				required
				type={type}
				name={name}
				placeholder={placeholder}
				className={`border py-[15px] rounded ${
					icon ? 'pl-10' : ''
				} ${classList}`}
			/>
		</div>
	)
}

export default Input
