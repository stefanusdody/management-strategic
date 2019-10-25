import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  space:{
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 300,
  },
  text: {
    textAlign: "center"
  }
}))


const InternalFactors = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/internal-factors">
          Read More
        </Button>
      )
    )
  }

  const showBackButton = (showBack) => {
    return(
      showBack && (
        <Button size="small" color="primary" href="/">
          Back
        </Button>
      )
    )
  }

  const showViewParag = (showParagraf) => {
    return(
      showParagraf && (
        <div>
         <Typography variant="body2" color="textSecondary" component="p">
           Internal environment is an environment within the company in the form of resources owned by the company that serves to support the company's performance in achieving competitive advantage.
           Internal environmental analysis is needed to be able to identify the strengths or weaknesses of the company's resources.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           The following are types of resources that are strong, have competitiveness, and also have competence (Gamble, Thompson, 2009) :
         </Typography>
         <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <ul>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 Expertise, Skills or Capabilities in Competition.
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Skills in operations with low costs, have proven capabilities in making and introducing product innovations,
                  capabilities in cutting the supply chain path, expertise in providing good service consistency to consumers
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 Valuable Physical Resources
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In the form of good buildings and equipment, location of services, ownership of valuable natural resources.
                </Typography>
               </li>
               <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Valuable Human Resources and Intellectual Capital
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  experience and abilities possessed by the workforce, having potential employees in important areas,
                  emphasizing the collectivity of learning within the organization, and having good managerial abilities
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 Valuable Organizational Resources
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  a system that can maintain and control the quality of products, has technology,
                  important patents, and has a strong distribution or retail network
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 Valuable Intangible Resource
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  a strong or well-known brand name and has strong buyer loyalty
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 Having a Great Alliance or Collaborating That is Valuable In Supporting Competition
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  make an alliance or collaboration to get or develop valuable technology, develop specialization, or develop geographical markets.
                </Typography>
               </li>
            </ul>
          </div>
          </Grid>

        </div>
      )
    )
  }

  const showViewImage = (showImage) => {
    return(
      showImage && (
        <div >
           <img src={require(`../assets/internalenvironment.png`)} className="d-block w-100" alt="..."/>
        </div>
      )
    )
  }



  return (
  <Container>
    <Card className={classes.space}>
      <CardActionArea>
        {showViewImage(showImage)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
            "The Importance of Looking at Internal Environmental Factors"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            October 22, 2019
          </Typography>
          <br/>
          {showViewParag(showParagraf)}
        </CardContent>

      </CardActionArea>
      <CardActions>
        {showBackButton(showBack)}
        {showReadButton(showRead)}
      </CardActions>
    </Card>
  </Container>
  );
}

export default InternalFactors;
