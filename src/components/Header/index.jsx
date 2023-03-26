import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();

    dispatch(action);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <GitHubIcon className={classes.menuButton} />
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.link} to='/'>
              Dunlok Dev
            </Link>
          </Typography>

          <NavLink className={classes.link} to='/todos'>
            <Button color='inherit'>Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to='/albums'>
            <Button color='inherit'>Albums</Button>
          </NavLink>
          {!isLoggedIn && (
            <Button color='inherit' onClick={handleClickOpen}>
              Login
            </Button>
          )}

          {isLoggedIn && (
            <IconButton color='inherit' onClick={(e) => handleUserClick(e)}>
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* === MENU DROPDOWN OF USER */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            handleLogoutClick();
          }}
        >
          Logout
        </MenuItem>
      </Menu>

      {/* === DIALOG FORM REGISTER === */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        disableEscapeKeyDown
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          <DialogContentText>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />

                <Box textAlign='center'>
                  <Button color='primary' onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )}

            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />

                <Box textAlign='center'>
                  <Button
                    color='primary'
                    onClick={() => setMode(MODE.REGISTER)}
                  >
                    Don't have an account. Register here
                  </Button>
                </Box>
              </>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
