import { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.scss';
import { Box, Grid } from '@mui/material';

export const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return(<>
  <Box>
  <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    
  </Grid>
  <Grid item xs={6} md={4}>
  <Box marginTop={3}>
  <Calendar onChange={onChange} value={value} />
  </Box>
  </Grid>
</Grid>
  </Box>
  </>)
}
