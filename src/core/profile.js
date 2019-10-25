import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  space:{
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
  }
}))

const Profile = () => {
  const classes = useStyles();

  return(
    <Container className={classes.space}>
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
    </Container>
  )
}

export default Profile
