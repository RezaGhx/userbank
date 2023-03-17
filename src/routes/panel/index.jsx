import React, { lazy } from 'react';
import Panel from 'pages/panel';
import RoutesHandler from 'helper/routesHandler';
import LoadingPage from 'components/loadingPage';

const Dashboard = lazy(() => import('pages/panel/dashboard'));
const UserList = lazy(() => import('pages/panel/userList'));
const CreateUser = lazy(() => import('pages/panel/createUser'));
const EditUser = lazy(() => import('pages/panel/editUser'));

const routes = [
	{
		path: '/dashboard',
		component: (
			<React.Suspense fallback={<LoadingPage />}>
				<Dashboard />
			</React.Suspense>
		),
	},
	{
		path: '/userList',
		component: (
			<React.Suspense fallback={<LoadingPage />}>
				<UserList />
			</React.Suspense>
		),
	},
	{
		path: '/createUser',
		component: (
			<React.Suspense fallback={<LoadingPage />}>
				<CreateUser />
			</React.Suspense>
		),
	},
	{
		path: '/editUser/:userId',
		component: (
			<React.Suspense fallback={<LoadingPage />}>
				<EditUser />
			</React.Suspense>
		),
	},
];

function PanelRoutes() {
	return (
		<Panel>
			<RoutesHandler routes={routes} />
		</Panel>
	);
}

export default PanelRoutes;
