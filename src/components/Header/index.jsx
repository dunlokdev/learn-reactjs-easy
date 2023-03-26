import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Register from 'features/Auth/components/Register';

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
}));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
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
          <Button color='inherit' onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* === DIALOG FORM REGISTER === */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        disableEscapeKeyDown
      >
        <DialogContent>
          <DialogContentText>
            <Register closeDialog={handleClose} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
