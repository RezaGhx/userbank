import { useSnackbar } from 'notistack'

let snackbarRef = null;
function SnackbarUtilsConfigurator(): any {
	snackbarRef = useSnackbar();
	return null;
}

function toast(msg: string, options: Object = {}): void {
	snackbarRef?.enqueueSnackbar(msg, options)
}

const snackActions = {
	success(msg: string, options: Object = {}): void {
		toast(msg, { ...options, variant: 'success' })
	},
	warning(msg: string, options: Object = {}): void {
		toast(msg, { ...options, variant: 'warning' })
	},
	info(msg: string, options: Object = {}): void {
		toast(msg, { ...options, variant: 'info' })
	},
	error(msg: string, options: Object = {}): void {
		toast(msg, { ...options, variant: 'error' })
	},
}

export {
	SnackbarUtilsConfigurator,
	snackActions,
}