const Input = ({ placeholder, name, classList, text }) => {
	return (
		<input
			type={text}
			className={`${classList}`}
			placeholder={placeholder}
			name={name}
		/>
	)
}

export default Input
