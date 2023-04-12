import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar >
          <Typography  variant='h5' sx={{ flexGrow: 1 }}>InfyAir</Typography>
          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ?  'warning7' : '' } }} sx={{ color: 'white', textTransform: 'capitalize'}}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? 'warning' : '' } }} sx={{ color: 'white', textTransform: 'capitalize' }}>Contact</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? 'warning' : '' } }} sx={{ color: 'white', textTransform: 'capitalize' }}>Login/Registration</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
