import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DehazeIcon from '@mui/icons-material/Dehaze';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideDrawer = ({ users, signOutUser }) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <>
      <DehazeIcon className='drawer_btn' onClick={() => setDrawerState(true)} />

      <Drawer
        anchor={'right'}
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Box sx={{ width: 200 }}>
          <List>
            <ListItem
              button
              component={RouterLink}
              to='/'
              onClick={() => setDrawerState(false)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to='/contact'
              onClick={() => setDrawerState(false)}
            >
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItem>

            {!users.auth ? (
              <ListItem
                button
                component={RouterLink}
                to='/auth'
                onClick={() => setDrawerState(false)}
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary='Sign in' />
              </ListItem>
            ) : (
              <ListItem
                button
                component={RouterLink}
                to='/'
                onClick={() => {
                  signOutUser();
                  setDrawerState(false);
                }}
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary='Sign Out' />
              </ListItem>
            )}

            <>
              <Divider>
                {users.auth ? (
                  <ListItem
                    button
                    component={RouterLink}
                    to='/dashboard'
                    onClick={() => setDrawerState(false)}
                  >
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary='Dashboard' />
                  </ListItem>
                ) : null}
              </Divider>
            </>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
