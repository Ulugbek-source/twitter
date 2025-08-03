const Input = ({ placeholder, name, classList, type = 'text' }) => {
	return (
		<input
			required
			type={type}
			className={`${classList}`}
			placeholder={placeholder}
			name={name}
		/>
	)
}

export default Input
