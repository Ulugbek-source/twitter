import { Link } from 'react-router-dom'

const Text = ({ type, title, classList, navigate }) => {
	if (type == 'p') {
		return (
			<p className={`${classList} font-normal text-[18px] text-[#000000]`}>
				{title}
			</p>
		)
	} else if (type == 'span') {
		return (
			<span
				className={`${classList} text-[18px] font-normal font-[Roboto] text-[#000]`}
			>
				{title}
			</span>
		)
	} else if (type == 'Link') {
		return (
			<Link
				to={navigate}
				className={`${classList} text-[18px] font-normal font-[Roboto] text-[#1DA1F2]`}
			>
				{title}
			</Link>
		)
	}
}

export default Text
