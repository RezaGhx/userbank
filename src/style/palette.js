import type { paletteType } from '@shared/model/style/paletteType';

const lightPalette: paletteType = {
	primaryLight: {
		light: '#f6f6f6',
		main: '#e7eef2',
		dark: '#dae5eb',
	},
	primary: {
		main: '#17407a',
		light: '#456694',
		dark: '#102C55',
	},
	secondaryLight: {
		main: '#E9EEF4',
		light: '#f9fcff',
		dark: '#dee5ee',
	},
	secondary: {
		main: '#B3B3B3',
		light: '#EBEBEB',
		dark: '#A1A1A1',
	},
	secondaryDark: {
		main: '#333333',
		light: '#5B5B5B',
		dark: '#232323',
	},
	text: {
		main: '#989898',
		light: '#ACACAC',
		dark: '#6A6A6A',
	},
	success: {
		main: '#22b573',
		light: '#25c77e',
		dark: '#1fa368',
		contrastText: '#fff',
	},
	error: {
		main: '#d32f2f',
		light: '#ef5350',
		dark: '#c62828',
	},
	warning: {
		main: '#ed6c02',
		light: '#ff9800',
		dark: '#e65100',
	},
	info: {
		main: '#0000CD',
		light: '#ADD8E6',
		dark: '#00008B',
		contrastText: '#FFFFFF',
	},
	white: {
		main: '#ffffff',
		light: '#ffffff',
		dark: '#B2B2B2',
		contrastText: '#000',
	},
	black: {
		main: '#000000',
		light: '#333333',
		dark: '#2D2828',
	},
	home: {
		main: '#008080',
		light: '#20B2AA',
		dark: '#008B8B',
		contrastText: '#FFFFFF',
	},
	// action and background objects name
};

const darkPalette: paletteType = {
	primary: {
		main: '#17407a',
		light: '#456694',
		dark: '#102C55',
	},
	primaryLight: {
		main: '#0071BC',
		light: '#9c27b0',
		dark: '#7b1fa2',
	},
	secondaryDark: {
		main: '#333333',
		light: '#9c27b0',
		dark: '#7b1fa2',
	},
	secondary: {
		main: '#B3B3B3',
		light: '#EBEBEB',
		dark: '#A1A1A1',
	},
	secondaryLight: {
		main: '#E9EEF4',
		light: '#f9fcff',
		dark: '#dee5ee',
	},
	text: {
		main: '#4D4D4D',
		light: '#9c27b0',
		dark: '#7b1fa2',
	},
	success: {
		main: '#22b573',
		light: '#25c77e',
		dark: '#1fa368',
		contrastText: '#fff',
	},
	error: {
		main: '#d32f2f',
		light: '#ef5350',
		dark: '#c62828',
	},
	warning: {
		main: '#ed6c02',
		light: '#ff9800',
		dark: '#e65100',
	},
	info: {
		main: '#FCBC2B',
		light: '#03a9f4',
		dark: '#01579b',
	},
	white: {
		main: '#ffffff',
		light: '#9c27b0',
		dark: '#7b1fa2',
	},
	black: {
		main: '#000000',
		light: '#b3b3b3',
		dark: '#7b1fa2',
	},
};

export { lightPalette, darkPalette };
