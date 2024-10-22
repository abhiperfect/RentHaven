import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import HotelIcon from '@mui/icons-material/Hotel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false); // State for controlling drawer open/close
  const navigate = useNavigate(); // Initialize navigate

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    toggleDrawer(false)(); // Close the drawer after navigation
  };

  const list = () => (
    <Box
      sx={{ width: 250 }} // Fixed width for the left drawer
      role="presentation"
      onClick={toggleDrawer(false)} // Close on click
      onKeyDown={toggleDrawer(false)} // Close on key down
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation('/profile')}>
            <ListItemIcon>
              <PersonIcon /> {/* Icon for Profile */}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation('/bookedhotels')}>
            <ListItemIcon>
              <HotelIcon /> {/* Icon for All Hotel Booking */}
            </ListItemIcon>
            <ListItemText primary="All Hotel Booking" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><AccountCircle/></Button> {/* Button to open the left drawer */}
      <Drawer
        anchor="left" // Fixed anchor for left drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
