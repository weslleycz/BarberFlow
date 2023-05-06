import { Box, Grid } from '@mui/material';
import { Menu } from 'components/Menu';
import { ReactNode } from 'react';
import Styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid height={'100vh'} className={Styles['menu-container']} xs={2}>
            <center>
              <Menu />
            </center>
          </Grid>
          <Grid bgcolor={"#fff"} xs={10}>{children}</Grid>
        </Grid>
      </Box>
    </>
  );
};
