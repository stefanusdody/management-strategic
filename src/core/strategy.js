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


const Strategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/strategy">
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
         Strategy is a very basic pattern in setting goals, spreading resources, and interacting from an organization with markets, competitors, and other environmental factors. From this definition the strategy must explain clearly about (Mullins, Orville, 2010)
        </Typography>
        <Grid item xs={12} md={12}>
        <div className={classes.demo}>
          <ul>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                What (goals to be achieved)
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                where (where industries and product markets to focus on)
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                What (goals to be achieved)
              </Typography>
             </li>
          </ul>
        </div>
      </Grid>
      <Typography gutterBottom variant="h6" component="h2">
        Component of Strategy
      </Typography>
      <img src={require(`../assets/componentstrategy.png`)} className="d-block w-100" alt="..."/>
      <Typography variant="body2" color="textSecondary" component="p">
       In developing a strategy, it must contain five components (Mullins, Orville, 2010), consisting of:
      </Typography>
      <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        <ul>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Scope
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Scope of the strategy must be able to explain the plan to enter the type of industry, product line, and the appropriate market segments in order to compete.
             Decisions about the organization's strategic scope must reflect management's views about the company's goals, or mission.
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Objective
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             A strategy must explain in detail about a level to be achieved in one or more dimensions of performance such as volume growth, profit contribution,
             or return on investment during the time specified for each business and overall product market.
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Resource Allocation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Every organization has limited financial and human resources.
              Formulating a strategy also involves how resources will be obtained and allocated, throughout the company, product markets, functional departments, and activities in each business
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Identification of sustainable competitive advantages
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              An important part of the strategy is the specification of how an organization will compete in each business market and product in its scope.
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Synergy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Synergy exists when company business, products, resource distribution, and competencies complement and strengthen one another.
            </Typography>
           </li>
        </ul>
      </div>
    </Grid>
    <Typography gutterBottom variant="h6" component="h2">
      Strategy Levels
    </Typography>
    <img src={require(`../assets/strategylevels.png`)} className="d-block w-100" alt="..."/>
    <Typography variant="body2" color="textSecondary" component="p">
      In an organization, especially in large organizations, the hierarchy of strategies is divided into three levels that are interrelated between one strategy and another, the three hierarchies of those strategies (Mullins, Orville, 2010) are:
    </Typography>
    <Grid item xs={12} md={12}>
    <div className={classes.demo}>
      <ul>
         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Corporate Strategy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           At the corporate level, a manager must be able to coordinate the activities of several business units. Things that need to be considered at the corporate level are what business is being run, what business will be entered, and which part of the total company resources will be allocated to each business to achieve the organization's goals and objectives. In developing and maintaining competency at the corporate level, the focus is on producing strong human resources, financial excellence, and technological resources, designing effective organizational structures, and carrying out synergies among elements within the company.
          </Typography>
         </li>
         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Business Unit Strategy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           One of the most important things in business strategy is about how to choose a strategy that can sustain competitive advantage.
           Another thing that must be considered at the business unit level is determining how many and which market segments to go to and how to get the product to enter the market.
          </Typography>
         </li>
         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Functional Strategy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The main focus in functional strategies is to allocate effectively and coordinate resources and activities to achieve the company's objectives in clear market specifics. A company can determine competitive advantage and synergize through the integration of the marketing mix program by adjusting the needs and desires of potential consumers who are the target market.
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
           <img src={require(`../assets/strategy.jpg`)} className="d-block w-100" alt="..."/>
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
            "The Main Component in Developing The Right Strategy"
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

export default Strategy;
