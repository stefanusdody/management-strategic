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


const MarketFollowersStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/marketfollowersstrategy">
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
        The usual strategy used by market followers in fighting against competitors and market leaders is to imitate products, this happens because of the limited costs of the company in developing new products, informing products, and educating the market.
        The following are four strategies that can be followed by market followers:
      </Typography>
      <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        <ul>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Product Counterfeiting
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Market followers will imitate products and packaging from market leaders and then sell them through distribution channels that have a bad reputation.
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Product Copier
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Market followers will imitate the product, name and packaging of the market leader by making a slight variation
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Product Impersonator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Market followers will imitate by copying a portion of the market leader, but still maintaining differentiation in packaging, advertising, prices, and marketing locations.
            </Typography>
           </li>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Adapters
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Market followers will adapt or improve the product of the leader, then choose to market the product in a different market.
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
           <img src={require(`../assets/marketfollowers.jpg`)} className="d-block w-100" alt="..."/>
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
            "Strategy as a Market Followers"
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

export default MarketFollowersStrategy;
