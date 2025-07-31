const Button = ({ title, classList }) => {
	return (
		<button type='submit' className={`${classList}`}>
			{title}
		</button>
	)
}

export default Button
