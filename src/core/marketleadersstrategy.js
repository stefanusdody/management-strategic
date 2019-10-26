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


const MarketLeadersStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/marketleadersstrategy">
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
        The characteristics of companies that are classified as market leaders are:
      </Typography>
      <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        <ul>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Has the largest market share in the product market
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Has an influence on price changes in the industrial environment
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Able to develop new products, have a wide distribution range, and carry out high-intensity promotions
            </Typography>
           </li>
        </ul>
      </div>
     </Grid>
     <Typography variant="body2" color="textSecondary" component="p">
       The following are some of the strategies that can be carried out by market leaders to maintain their existence and improve the results already achieved
     </Typography>
     <br/>
     <Typography gutterBottom variant="subtitle1" component="h2" >
       Expanding the Entire Market
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       Things that must be considered by the market leader in its strategy to expand the market is that the company must find new users, new users, and use more products.
     </Typography>
     <br/>
     <Typography gutterBottom variant="subtitle1" component="h2" >
       Maintaining Market Share
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       When market leaders implement strategies to expand market size, then on one hand the company will also think of a strategy to maintain its business market share. There are several strategies that can be carried out by market leaders to maintain market share, namely:
     </Typography>
     <Grid item xs={12} md={12}>
     <div className={classes.demo}>
       <ul>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Position Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders develop their products to be superior so that the market for these products will be difficult for competitors to penetrate
           </Typography>
          </li>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Flank Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders must be able to build a product to protect the weaknesses
             of their products and can be the basis for counterattacking their competitors
           </Typography>
          </li>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Preemptive Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders can make a more aggressive manuver by attacking before the competitor makes an attack on the product
           </Typography>
          </li>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Counteroffensive Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders can counterattack strategies that have been taken by competitors, an effective counterattack is to attack a competitor's main area so that the competitor will change his strategy to defend their products,
             a common form of attack carried out is to use economic or political power
           </Typography>
          </li>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Mobile Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders expand new markets with the aim of being used as a center of defense and counterattack in the future, where they do so by widening and diversifying the market
           </Typography>
          </li>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Contraction Defense
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             Market leaders cannot defend their entire territory and the best course of action they can take is to withdraw, with the intention of surrendering weak areas and strengthening strong territories with the aim of consolidating competitive forces in the market.
           </Typography>
          </li>
       </ul>
     </div>
    </Grid>
    <Typography gutterBottom variant="subtitle1" component="h2" >
      Expanding Market Share
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Market leaders can expand their market share which aims to increase profits and also income from the products they produce
    </Typography>



      </div>
      )
    )
  }

  const showViewImage = (showImage) => {
    return(
      showImage && (
        <div >
           <img src={require(`../assets/marketleaders.jpeg`)} className="d-block w-100" alt="..."/>
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
            "Strategy as a Market Leaders"
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

export default MarketLeadersStrategy;
