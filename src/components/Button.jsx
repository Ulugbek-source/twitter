const Button = ({ children, classList }) => {
	return (
		<button
			type='submit'
			className={`${classList} py-[18px] bg-[#1DA1F2] rounded-[76px] hover:opacity-[80%] duration-300 w-full font-bold font-[Roboto] text-[18px] text-white cursor-pointer`}
		>
			{children}
		</button>
	)
}

export default Button
