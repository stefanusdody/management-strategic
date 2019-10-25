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


const MarketChallengersStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/marketchallengersstrategy">
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
         Market challengers are companies that are ranked second, third, and lower in an industrial environment. Market challengers generally carry out attacks on market leaders or competitors with
         aggressive movements or also by playing according to the rules in an effort to achieve greater market share.
       </Typography>
       <br/>
       <Typography variant="body2" color="textSecondary" component="p">
         The following are possible strategies for market challengers to carry out competitive attacks against market leaders and competitors:
       </Typography>
       <br/>
       <Typography gutterBottom variant="subtitle1" component="h2" >
         Define strategic objectives and opponents
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
         Market challengers must be able to define goals and opponents to be attacked in order to increase market share, namely strategies to attack market leaders, attack companies of the same size and not work well and lack funding, and attack small local and regional companies
       </Typography>
       <br/>
       <Typography gutterBottom variant="subtitle1" component="h2" >
         Choose a general attack strategy
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
         There are five strategies that can be carried out by market challengers to carry out attacks on competitors and also market leaders in their efforts to achieve greater market share
       </Typography>
       <Grid item xs={12} md={12}>
       <div className={classes.demo}>
         <ul>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Frontal Attack
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Market challengers can carry out attacks on competitors and market leaders by directly attacking the strengths of competitors and market leaders, namely by matching products, advertisements, prices, and distribution of opponents
             </Typography>
            </li>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Flank Attack
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Market challengers can carry out attacks against competitors and market leaders by directly attacking weaknesses held by competitors and market leaders, and serving unmet market needs
             </Typography>
            </li>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Encirclement Attack
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Market challengers can carry out attacks against competitors and market leaders by launching a total attack on several fronts at once, a siege attack can be carried out if the challenger has superior resources and
               believes that the strategy can quickly be able to break the opponent's defenses
             </Typography>
            </li>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Bypass Attack
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Market challengers can carry out attacks on competitors and market leaders by attacking more vulnerable markets to expand a company's resource base, without attacking opponents directly. This strategy has three approaches, namely: diversification into unrelated products, diversification into new geographical markets,
               and innovating on new technologies to complement existing products
             </Typography>
            </li>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Guerrilla Attack
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Market challengers can carry out attacks on competitors and market leaders by carrying out small irregular attacks to disrupt competitors
             </Typography>
            </li>
         </ul>
       </div>
      </Grid>
      <Typography gutterBottom variant="subtitle1" component="h2" >
        Choose a specific attack strategy
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Market challengers can carry out attacks in a certain way beyond the five general strategies and can develop more specific strategies, namely through price cutting strategies, expanding products, innovating products, providing better services, innovating on distribution networks,
        reducing production costs, and to do intensive advertising promotion
      </Typography>


      </div>
      )
    )
  }

  const showViewImage = (showImage) => {
    return(
      showImage && (
        <div >
           <img src={require(`../assets/marketchallengers.jpg`)} className="d-block w-100" alt="..."/>
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
            "Strategy as a Market Challengers"
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

export default MarketChallengersStrategy;
