import IRoute from '../../types/config.IRoute'
import AboutPage from '../pages/AboutPage/pages.AboutPage'
import DnDQuizPage from '../pages/DnDQuiz/DnDPageQuiz.page'
import FourOFourPage from '../pages/FourOFourPage/pages.FourOFourPage'
import HomePage from '../pages/HomePage/pages.HomePage'
import MQuizPage from '../pages/MQuiz/page.Mquiz'
import Pages from './Pages'

const Routes: IRoute[] = [
	{
		path: '/',
		page: Pages[0],
		component: HomePage,
		exact: true,
	},
	{
		path: '/about',
		page: Pages[1],
		component: AboutPage,
		exact: true,
	},
	{
		path: '/old/quiz1',
		page: Pages[2],
		component: DnDQuizPage,
		exact: true,
	},
	{
		path: '/old/quiz2',
		page: Pages[3],
		component: MQuizPage,
		exact: true,
	},
	{
		path: '*',
		page: Pages[5],
		component: FourOFourPage,
		exact: true,
	},
]

export default Routes
