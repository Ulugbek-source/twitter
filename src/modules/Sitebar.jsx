import { DotsIcon, SearchIcon, SettingsIcon } from '../assets/icons'
import { ProfileImage4, ProfileImage5 } from '../assets/images'
import { Button, Heading, Input, Text } from '../components'

const Sitebar = () => {
	return (
		<div className='w-[40%] h-[100vh] overflow-y-auto scroll-none'>
			<form autoComplete='off' className='py-[20px] ml-[10px]'>
				<Input
					name='search'
					placeholder='Search Twitter'
					icon={<SearchIcon className='w-[24px] h-[24px]' />}
					classList='bg-[#EFF3F4] rounded-[31px] outline-none border-none w-full'
				/>
			</form>
			<div className='ml-[10px] px-[15px] pt-[20px] w-full pb-[30px] rounded-[10px] bg-[#F7F9F9]'>
				<div className='flex items-center justify-between'>
					<Heading type={'h2'} title={'Trends for you'} />
					<SettingsIcon />
				</div>
				<div className='flex justify-between mt-[20px]'>
					<div>
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							Trending in Germany
						</span>
						<Heading type={'h3'} title={'Revolution'} classList={'mb-[3px]'} />
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							50.4K Tweets
						</span>
					</div>
					<DotsIcon />
				</div>
				<div className='flex justify-between mt-[20px]'>
					<div>
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							Trending in Germany
						</span>
						<Heading type={'h3'} title={'Revolution'} classList={'mb-[3px]'} />
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							50.4K Tweets
						</span>
					</div>
					<DotsIcon />
				</div>
				<div className='flex justify-between mt-[20px] mb-[30px]'>
					<div>
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							Trending in Germany
						</span>
						<Heading type={'h3'} title={'Revolution'} classList={'mb-[3px]'} />
						<span className='text-[#393B4160] text-[16px] mb-[2px]'>
							50.4K Tweets
						</span>
					</div>
					<DotsIcon />
				</div>
				<Text
					type={'Link'}
					title={'Show more'}
					classList={'text-[#1DA1F2] text-[18px]'}
				/>
			</div>
			<div className='ml-[10px] mt-[20px] mb-[30px] px-[15px] pt-[20px] w-full pb-[30px] rounded-[10px] bg-[#F7F9F9]'>
				<Heading type={'h2'} title={'You might like'} />
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-[13px]'>
						<img
							className='w-[60px] h-[60px]'
							src={ProfileImage4}
							alt='Profile image'
						/>
						<div>
							<Heading type={'h3'} title={'Mushtariy'} />
							<span>@Mushtar565266</span>
						</div>
					</div>
					<Button classList={'!bg-[#000] !py-[10px] !w-[92px]'}>Follow</Button>
				</div>
				<div className='flex items-center justify-between mt-[25px] mb-[30px]'>
					<div className='flex items-center gap-[13px]'>
						<img
							className='w-[60px] h-[60px]'
							src={ProfileImage5}
							alt='Profile image'
						/>
						<div>
							<Heading type={'h3'} title={'Shuhratbek'} />
							<span>@mrshukhrat</span>
						</div>
					</div>
					<Button classList={'!bg-[#000] !py-[10px] !w-[92px]'}>Follow</Button>
				</div>
				<Text
					type={'Link'}
					title={'Show more'}
					classList={'text-[#1DA1F2] text-[18px]'}
				/>
			</div>
			<div className='flex gap-[15px] items-center w-full ml-[10px]'>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'Terms of Service'}
				/>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'Privacy Policy'}
				/>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'Cookie Policy'}
				/>
			</div>
			<div className='flex gap-[15px] items-center w-full ml-[10px] mt-[10px]'>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'Imprint'}
				/>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'Ads Info'}
				/>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'More ···'}
				/>
				<Text
					type={'p'}
					classList={'!text-[16px] text-[#536471]'}
					title={'© 2021 Twitter, Inc.'}
				/>
			</div>
		</div>
	)
}

export default Sitebar
