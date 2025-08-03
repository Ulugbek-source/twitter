import { Route, Routes } from 'react-router-dom'
import { PageLoading, PATH } from '../components'
import { Suspense } from 'react'
import { Login } from '../pages'

const LoginRoutes = () => {
	return (
		<Routes>
			<Route
				path={PATH.main}
				element={
					<Suspense fallback={<PageLoading />}>
						<Login />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default LoginRoutes
