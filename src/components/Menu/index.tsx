import { Box, Button, Stack } from '@mui/material';
import Logo from '../../renderer/assets/logo.svg';

export const Menu = () => {
  return (
    <>
      <Box marginTop={2}>
        <img height={80} src={Logo}></img>
      </Box>
      <Box marginTop={2} p={2}>
        <Stack spacing={2}>
          <Button variant="contained">Visão geral</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Box>
    </>
  );
};
