import { Box, Stack } from '@mui/material';

const currentYear = new Date().getFullYear();

// بدلیل اینکه فوتر فقط یکبار برای این اپ استفاده میشه نیازی به اینکه استایل آن توی فایل جدا باشه نداره
// اما اگر تکه کذ غیر کامپوننتی‌ای مانند تیبل خیلی جاها استفاده بشه و استایل خاصی داشته باشه، در اینصورت فایل استایلی براش ساخته میشه

function Footer(): React$Node {
  return (
    <Stack
      component={'div'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      color={'home.main'}
      py={'2rem'}
      sx={{
        backgroundColor: 'info.dark',
        position: 'fixed',
        bottom: 0,
        borderTop: '1rem double',
        borderTopColor: 'home.main',
        direction: 'ltr',
        fontFamily: ['iranyekan', 'sans-serif'].join(','),
      }}
    >
      <Box component={'h4'} m={0}>
        <Box component={'span'}>
          {'copyright '}
          {`${currentYear} © `}
        </Box>
        <Box component={'span'} sx={{ letterSpacing: '4px' }}>
          {'userbank™'}
        </Box>
      </Box>
      <Box component={'h5'} m={0}>
        {'quickly designed & developed with ♥ on '}
        <Box
          component={'a'}
          sx={{
            transition: '0.2s ease',
            '&:hover': { color: 'white.main', transition: '0.2s ease' },
          }}
          href={'https://www.linkedin.com/in/reza-ghafoori-8a77a1172/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'🌎'}
        </Box>
      </Box>
    </Stack>
  );
}

export default Footer;
