import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Air4 from '../../../images/Air4.jpg'
import Registration from './Registration';
import UserLogin from './UserLogin';
import { FlightTakeoff} from '@mui/icons-material';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${Air4})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='black' indicatorColor='primary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            <FlightTakeoff sx={{ color: 'black', fontSize: 100 }} />
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>InfyAir</Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </>;
};

export default LoginReg;
