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


const CompetitiveStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/competitivestrategy">
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
          After determining the company's position and products obtained from the results of the SWOT analysis and General Electric Matrix,
          the next step is that the company can choose a marketing strategy by grouping the company based on the role the company plays in the competitive market in the industry
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
         In an industrial competition, a company is grouped into four groups,
         namely: Market leaders, market challengers, market followers, and niche market players (Kotler, ang, leong, tan, 2003)
        </Typography>
        <br/>
        <Typography gutterBottom variant="subtitle1" component="h2" >
          The Competitive Profile Matrix (CPM)
        </Typography>
        <img src={require(`../assets/competitiveprofilematrix .png`)} className="d-block w-100" alt="..."/>
        <Typography variant="body2" color="textSecondary" component="p">
          CPM analysis is used to identify strengths and weaknesses of competing companies in their efforts to see the company's strategic position.
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
          In CPM analysis, weighting and also giving a score is almost the same as EFE analysis where the score illustrates the strengths and weaknesses of the company, namely a score of 4 for major strengths, a score of 3 for minor strengths, a score of 2 for minor weaknesses,
          and a score of 1 for main weakness. In this CPM analysis the total weighting of scores can be compared with competing companies to see the company's competitive position.
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
          After analyzing CPM, a company can determine its position against its competitors in an industry as:
        </Typography>
        <Grid item xs={12} md={12}>
        <div className={classes.demo}>
          <ul>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Market Leaders
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Market Challengers
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Market Followers
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Market Niche
              </Typography>
             </li>
          </ul>
        </div>
      </Grid>

      <Typography gutterBottom variant="subtitle1" component="h2" >
        Market Leaders
      </Typography>
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
     <Typography gutterBottom variant="subtitle1" component="h2" >
       Market Challengers
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       Market challengers are companies that are ranked second, third, and lower in an industrial environment. Market challengers generally carry out attacks on market leaders or competitors with
       aggressive movements or also by playing according to the rules in an effort to achieve greater market share.
     </Typography>
     <br/>
     <Typography gutterBottom variant="subtitle1" component="h2" >
       Market Followers
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       The usual strategy used by market followers in fighting against competitors and market leaders is to imitate products, this happens because of the limited costs of the company in developing new products, informing products, and educating the market.
     </Typography>
     <br/>
     <Typography gutterBottom variant="subtitle1" component="h2" >
       Market Niche
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
       In this strategy a company will choose to be a market leader in a small market, where in general the company will avoid competing directly with the market leader by setting targets in smaller markets that usually only get little interest or are ignored by market leaders.
       The strategy generally carried out by companies in niche players is to specialize
     </Typography>

      </div>
      )
    )
  }

  const showViewImage = (showImage) => {
    return(
      showImage && (
        <div >
           <img src={require(`../assets/competitivestrategy.jpg`)} className="d-block w-100" alt="..."/>
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
            "How to Create a Competitive Strategy?"
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

export default CompetitiveStrategy;
