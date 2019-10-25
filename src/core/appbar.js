import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CreateIcon from '@material-ui/icons/Create';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoreIcon from '@material-ui/icons/MoreVert';
import PaymentIcon from '@material-ui/icons/Payment';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Appbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
         <MenuItem>
             <IconButton aria-label="show 4 new mails" color="inherit">
               <HomeIcon />
             </IconButton>
             <Link color="inherit"variant="body2" className={classes.link} href="/" >
                <ListItemText>Home</ListItemText>
             </Link>
          </MenuItem>

           <div>
           <MenuItem onClick={handleProfileMenuOpen}>
             <IconButton
               aria-label="account of current user"
               aria-controls="primary-search-account-menu"
               aria-haspopup="true"
               color="inherit"
             >
                <AccountCircle />
             </IconButton>
              <Link color="inherit"variant="body2" className={classes.link} href="/profile" >
                 <ListItemText>My Profile</ListItemText>
              </Link>
           </MenuItem>
        </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default">
        <Toolbar>
         <Link color="inherit"variant="body2" className={classes.link} href="/" >
           <Typography className={classes.title} variant="h6" noWrap>
             MY BLOG
           </Typography>
        </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>


            <IconButton aria-label="show 4 new mails" color="inherit">
                <HomeIcon />
              <Link color="inherit"variant="body2" className={classes.link} href="/" >
                  <Typography className={classes.title} component="p">
                   Home
                  </Typography>
              </Link>
            </IconButton>


              <IconButton aria-label="show 17 new notifications" color="inherit">
                  <AccountCircle />
                <Link color="inherit"variant="body2" className={classes.link} href="/profile" >
                  <Typography className={classes.title} component="p">
                    My Profile
                   </Typography>
                </Link>
              </IconButton>


          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Appbar;
