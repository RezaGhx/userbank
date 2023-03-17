import { darkPalette, lightPalette } from './palette';

const theme: any = {
	palette: lightPalette,
	spacing: 4,
	typography: {
		fontFamily: [
			'iranyekan',
			'sans-serif',
			'Roboto',
			'Arial',
		].join(','),
		h1: {
			fontSize: '28px',
			lineHeight: 1.2,
			fontWeight: 500,
			letterSpacing: '-0.005em',
		},
		h2: {
			fontSize: '22px',
			lineHeight: 1.2,
			fontWeight: 500,
		},
		h3: {
			fontSize: '18px',
			lineHeight: 1.2,
			fontWeight: 500,
		},
		h4: {
			fontSize: '16px',
			lineHeight: 1.2,
			fontWeight: 500,
		},
		h5: {
			fontSize: '15px',
			lineHeight: 1.2,
			fontWeight: 400,
		},
		h6: {
			fontSize: '14px',
			lineHeight: '32px',
			fontWeight: 400,
		},
		body1: {
			fontSize: '14px',
			lineHeight: 1.2,
			fontWeight: 400,
		},
		body2: {
			fontSize: '14px',
			lineHeight: 1.2,
			fontWeight: 500,
		},
		button: {
			fontSize: '14px',
			lineHeight: 1.2,
			fontWeight: 400,
		},
		subBody1: {
			fontSize: '11.62px',
			lineHeight: 1.2,
			fontWeight: 400,
		},
		subBody2: {
			fontSize: '9.38px',
			lineHeight: 1.2,
			fontWeight: 400,
		},
		caption: {
			fontSize: '10px',
			lineHeight: '20px',
			fontWeight: 400,
		},
	},
	shape: {
		borderRadius: 0,
	},
	shadows: Array(25)
		.fill('none'),
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// height: '46.188px',
					height: '53.13px',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(!ownerState.multiline && {
						// height: '46.188px',
					}),
					alignItems: 'baseline',
				}),
			},
		},
		MuiSwitch:{
			styleOverrides:{
				root:{
					'& .MuiSwitch-switchBase':{
						'& .MuiSwitch-thumb':{
							boxShadow:'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
						},
					},
				},
			},
		},
	},
};

theme.shadows[8] =
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)';

function getTheme(isLight: boolean): Object {
	theme.palette = {
		...lightPalette,
		mode: 'light',
	};
	if (!isLight) {
		theme.palette = {
			...darkPalette,
			mode: 'dark',
		};
	}
	return theme;
}

export { theme, getTheme };
