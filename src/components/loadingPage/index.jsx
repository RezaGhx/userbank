import { Backdrop, CircularProgress } from '@mui/material';

function LoadingPage(): React$Node {
	return (
		<Backdrop
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open
		>
			<CircularProgress
				sx={{
					color: (theme) =>
						theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
				}}
				color={'success'}
				size={70}
				thickness={5}  />
		</Backdrop>
	);
}

export default LoadingPage;