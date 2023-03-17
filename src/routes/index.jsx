import React, { lazy } from 'react';
import RoutesHandler from 'helper/routesHandler';
import LoadingPage from 'components/loadingPage';

const Panel = lazy(() => import('./panel'));

function AppRoutes(): React$Node {

	const routes = [
		{
			path: 'panel/*',
			component: (
				<React.Suspense fallback={<LoadingPage />}>
					<Panel />
				</React.Suspense>
			),
		},
	];

	return (
		<RoutesHandler routes={routes} />
	);
}

export default AppRoutes;
