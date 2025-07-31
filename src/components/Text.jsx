const Text = ({ type, title, classList }) => {
	if (type == 'p') {
		return (
			<p className={`${classList} font-normal text-[18px] text-[#000000]`}>
				{title}
			</p>
		)
	} else if (type == 'span') {
		return (
			<span
				className={`${classList} text-[18px] font-normal font-[Roboto] text-[#1DA1F2]`}
			>
				{title}
			</span>
		)
	}
}

export default Text
