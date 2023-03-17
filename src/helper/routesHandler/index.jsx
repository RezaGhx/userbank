import { Route, Routes } from 'react-router-dom';
// import type { routesHandlerType } from '@shared/model/helper';

function RoutesHandler({ routes  = [] }: routesHandlerType): React$Node {
	return (
		<Routes>
			{routes.map((route) => {
				const { path, component, ...props } = route;
				const paths = Array.isArray(path) ? path : [path];

				return paths.map(item => (
					<Route
						{...props}
						key={item}
						path={item}
						element={component}
					/>
				))
			},
			)}
		</Routes>
	);
}

export default RoutesHandler;