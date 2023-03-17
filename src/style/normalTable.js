import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableRow } from '@mui/material';

const NormalTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.info.dark,
		color: theme.palette.info.light,
	},
}));

const NormalTableRow = styled(TableRow)(({ theme }) => ({
	// borderBottom: 0,
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.home.light,
	},
	'&:nth-of-type(even)': {
		backgroundColor: theme.palette.home.dark,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export { NormalTableCell, NormalTableRow };