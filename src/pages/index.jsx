import Explore from './Dashboard/Explore'
import Notifications from './Dashboard/Notifications'
import Messages from './Dashboard/Messages'
import Bookmarks from './Dashboard/Bookmarks'
import Lists from './Dashboard/Lists'
import Profile from './Dashboard/Profile'
import More from './Dashboard/More'
import { lazy } from 'react'

const Login = lazy(
	() =>
		new Promise(resolve => {
			return setTimeout(() => resolve(import('./Auth/Login')), 1500)
		})
)
const Home = lazy(
	() =>
		new Promise(resolve => {
			return setTimeout(() => resolve(import('./Dashboard/Home')), 1500)
		})
)

export {
	Login,
	Home,
	Explore,
	Notifications,
	Messages,
	Bookmarks,
	Lists,
	Profile,
	More,
}
