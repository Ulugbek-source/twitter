const Input = ({ placeholder, name, classList, type = 'text' }) => {
	return (
		<input
			type={type}
			className={`${classList}`}
			placeholder={placeholder}
			name={name}
		/>
	)
}

export default Input
