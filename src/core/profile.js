import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  space:{
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}))

const Profile = () => {
  const classes = useStyles();

  return(
    <Container className={classes.space}>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={require(`../assets/foto.png`)} className={classes.bigAvatar} />
      </Grid>
      <Typography gutterBottom variant="h6" component="h2">
        Welcome to my blog..
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        My name is Stefanus Dody Kristianto Wicaksono and you can call me Dody..I have experience in auditing, banking and entrepreneurship ...My last educational background is a Masters in Management from the University of Indonesia
      </Typography>
      <br/>
      <Typography variant="body2" color="textSecondary" component="p">
       I started this blog as a place to share and also document the knowledge I learned and also my experiences. In this blog I will write about my knowledge in Management Strategy
      </Typography>
      <br/>
      <Typography variant="body2" color="textSecondary" component="p">
       I am very open and also interested to discuss about management strategy ... if you are interested in discussing with me ... you can contact me via email stefanusdody@yahoo.com
      </Typography>
      <br/>
      <Typography gutterBottom variant="h6" component="h2">
        My Educational Background
      </Typography>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        </IconButton>
            <ListItemText>2003-2008</ListItemText>
            <ListItemText>Atmajaya University (S1)</ListItemText>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        </IconButton>
        <ListItemText>2009-2011</ListItemText>
        <ListItemText>University of Indonesia (S2)</ListItemText>
      </MenuItem>
    </Container>
  )
}

export default Profile
