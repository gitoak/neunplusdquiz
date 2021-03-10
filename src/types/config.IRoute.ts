import IPage from './pages.IPage'

export default interface IRoute {
	path: string
	page: IPage
	exact: boolean
	component: any
	props?: any
}
