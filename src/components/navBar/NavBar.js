import {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import CartWidget from '../cartWidget/CartWidget';
import DashboardIcon from '@mui/icons-material/Dashboard';


export default function NavBar() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Inicio" icon={<HomeIcon color="secondary" />} />
          <BottomNavigationAction label="Productos" icon={<DashboardIcon color="secondary" />} />
          <BottomNavigationAction label="Carrito" icon={<CartWidget badgeContent={4} />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}