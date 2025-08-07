import {
	CommentIcon,
	LikeIcon,
	RepostIcon,
	StatisticIcon,
	UploadIcon,
} from '../assets/icons'

const PostItem = ({ item }) => {
	return (
		<div
			key={item.id}
			className='p-5 flex gap-[15px] border-b-[1px] border-[#d8d8d8]'
		>
			<img
				className='w-[60px] h-[60px]'
				src={item.img}
				alt='Profile image'
				width={60}
				height={60}
			/>
			<div className='w-[80%]'>
				<div className='flex items-center gap-[5px] mb-[5px ]'>
					<strong className='font-bold text-[20px]'>{item.username}</strong>
					<p className='text-[18px] text-[#00000060]'>{item.email}</p>
				</div>
				<p className='mb-[15px] text-[18px] text-[#000000]'>{item.content}</p>
				{item.postImg && (
					<img
						src={item.postImg}
						className='w-full h-[453px] rounded-[20px]'
						alt='Post image'
					/>
				)}
				<div className='flex mt-[22px] items-center justify-between'>
					<div className='flex items-center gap-[10px]'>
						<CommentIcon />
						<span>{item.commentCount}</span>
					</div>
					<div className='flex items-center gap-[10px]'>
						<RepostIcon />
						<span>{item.repostCount}</span>
					</div>
					<div className='flex items-center gap-[10px]'>
						<LikeIcon />
						<span>{item.likeCount}</span>
					</div>
					<div className='flex items-center gap-[10px]'>
						<UploadIcon />
						<span>{item.uploadCount}</span>
					</div>
					<div className='flex items-center gap-[10px]'>
						<StatisticIcon />
						<span>{item.statisticCount}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PostItem
