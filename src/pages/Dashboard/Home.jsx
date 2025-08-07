import { useState } from 'react'
import {
	ChooseImgIcon,
	DateIcon,
	GifIcon,
	ModeIcon,
	SmileIcon,
	StatsIcon,
} from '../../assets/icons'
import {
	KebabImg,
	ProfileImage,
	ProfileImage1,
	ProfileImage2,
	ProfileImage3,
} from '../../assets/images'
import { Button, Heading, Input, PostItem } from '../../components'
import { useCookies } from 'react-cookie'

const Home = () => {
	const [cookies] = useCookies(['token'])
	const [chooseImg, setChooseImg] = useState(null)
	const [postList, setPostList] = useState(
		JSON.parse(localStorage.getItem('postList')) || [
			{
				id: 1,
				img: ProfileImage2,
				username: 'Designsta',
				email: '@inner · 25m',
				content:
					"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
				commentCount: 10,
				repostCount: 1,
				likeCount: 8,
				uploadCount: 0,
				statisticCount: 0,
				postImg: null,
			},
			{
				id: 2,
				img: ProfileImage3,
				username: 'cloutexhibition',
				email: '@RajLahoti · 22m',
				content:
					'YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.',
				commentCount: 0,
				repostCount: 5,
				likeCount: 9,
				uploadCount: 0,
				statisticCount: 0,
				postImg: null,
			},
			{
				id: 3,
				img: ProfileImage2,
				username: 'CreativePhoto',
				email: '@cloutexhibition · 1h',
				content: 'Обетда..... Кечиринглар',
				commentCount: 10,
				repostCount: 1,
				likeCount: 8,
				uploadCount: 0,
				statisticCount: 0,
				postImg: KebabImg,
			},
		]
	)
	function handleCreatePost(e) {
		e.preventDefault()
		const data = {
			id: postList[postList.length - 1].id
				? postList[postList.length - 1].id + 1
				: 1,
			img: ProfileImage1,
			username: cookies.token.email,
			email: cookies.token.email,
			content: e.target.todo.value,
			commentCount: 0,
			repostCount: 0,
			likeCount: 0,
			uploadCount: 0,
			statisticCount: 0,
			postImg: chooseImg,
		}
		setPostList([data, ...postList])
		setChooseImg(null)
		e.target.reset()
	}
	localStorage.setItem('postList', JSON.stringify(postList))
	return (
		<div className='scroll-none overflow-y-auto h-screen'>
			<div className='flex justify-between items-center p-5 border-b-[1px] border-[#d8d8d8]'>
				<Heading type={'h2'} title={'Home'} />
				<ModeIcon />
			</div>
			<div className='flex relative gap-[15px] p-5 border-b-[1px] border-[#d8d8d8]'>
				<img
					className='w-[60px] h-[60px]'
					src={ProfileImage}
					alt='Profile image'
					width={60}
					height={60}
				/>
				<form
					onSubmit={handleCreatePost}
					autoComplete='off'
					className='w-full pb-[28px]'
				>
					<Input
						name={'todo'}
						placeholder={"What's happening"}
						classList={
							'border-none outline-none mb-[32px] pt-[11px] font-semibold text-[20px]'
						}
					/>
					<div className='flex items-center gap-[22px]'>
						<label className='cursor-pointer'>
							<ChooseImgIcon />
							<input
								onChange={e =>
									setChooseImg(URL.createObjectURL(e.target.files[0]))
								}
								className='hidden'
								type='file'
							/>
						</label>
						<button type='button'>
							<GifIcon />
						</button>
						<button type='button'>
							<StatsIcon />
						</button>
						<button type='button'>
							<SmileIcon />
						</button>
						<button type='button'>
							<DateIcon />
						</button>
					</div>
					<Button
						classList={
							'!w-[108px] absolute !py-[10px] bottom-[5px] right-[18px]'
						}
					>
						Tweet
					</Button>
				</form>
			</div>
			<div>
				{postList.map(item => (
					<PostItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default Home
