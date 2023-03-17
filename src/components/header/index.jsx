import { Avatar, Box, Toolbar, Typography } from '@mui/material';
import { Logout, Menu, Dvr } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';
import userlogo from 'assets/images/userLogo.jpg';

const IconButtonNavbar = styled(MuiIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.home.main,
  color: theme.palette.info.dark,
  borderRadius: '0',
  padding: '0 .75rem',
  margin: '5px',
  height: '35px',
  width: '40px',
  '&:hover': {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.home.main,
  },
}));

function Header(): React$Node {
  return (
    <Box
      sx={{
        backgroundColor: 'info.dark',
        padding: '0 1rem',
        borderBottom: '1rem double',
        borderBottomColor: 'home.main',
      }}
    >
      <Toolbar>
        <Avatar
          src={userlogo}
          alt={'نام کاربری'}
          sx={{
            height: '40px',
            width: '40px',
            borderRadius: '5px',
            '& img': {
              height: 'unset',
            },
          }}
          variant={'rounded'}
        />
        <Typography
          variant={'h6'}
          noWrap
          component={'div'}
          sx={{ mr: 2, lineHeight: 2, overflow: 'visible' }}
        >
          {'نام کاربری'}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButtonNavbar onClick={() => alert('auditLog')} size={'large'}>
            <Menu fontSize={'small'} />
          </IconButtonNavbar>
          <IconButtonNavbar onClick={() => alert('auditLog')} size={'large'}>
            <Dvr fontSize={'small'} />
          </IconButtonNavbar>
          <IconButtonNavbar onClick={() => alert('auditLog')} size={'large'}>
            <Logout fontSize={'small'} />
          </IconButtonNavbar>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Header;
