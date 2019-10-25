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


const ExternalFactors = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/external-factors">
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
           The company's external environment are factors that are outside the company environment that can affect an
           industry as well as the company's performance and competitive advantage strategies contained therein. The company's external environment consists of the general environment and industrial environment.
         </Typography>
         <br/>
         <Typography gutterBottom variant="h6" component="h2">
           General Environment
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           The general environment is an element that exists in outside society that can directly affect an industry and the companies contained therein.
           the elements in the environment (David, 2007) are:
         </Typography>
         <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <ul>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 The economic segment
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The economic segment is a segment related to the interest rate, inflation rate, currency market, trade balance, budget, saving rate, GDP trends.
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 The Social, cultural, and demographic segments
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Social, cultural, and demographic segments are segments related to social behavior in society, including among others lifestyle changes, shifts in work and career preferences, balancing on environmental changes, behavior on work quality,
                  population, geographical distribution, income distribution , and also ethnic composition
                </Typography>
               </li>
               <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  The legal and political segment
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The legal and political segment is a segment related to the region in which an organization operates by taking into account the laws and regulations contained in that State. Examples are government policies related to business such as tax regulations,
                  antitrust regulations, and labor regulations
                </Typography>
               </li>
               <li>
               <Typography variant="body2" color="textSecondary" component="p">
                 The Technology Segment
               </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The Technology Segment is a segment related to the discovery of new works,
                  and applies these new inventions to new products, processes and basic materials.
                </Typography>
               </li>
            </ul>
          </div>
        </Grid>
        <Typography gutterBottom variant="h6" component="h2">
          Industrial Environment
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Industrial environment is an environment that must be considered by companies in determining a competitive advantage strategy to win competition in an industrial environment. To analyze the industrial environment, a company can use the five-forces model method developed by Michael Porter.
        </Typography>
        <br/>
        <img src={require(`../assets/5forces.png`)} className="d-block w-100" alt="..."/>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
          The strengths of the five-forces model (Mullins, Orville, 2010) are:
        </Typography>
        <Grid item xs={12} md={12}>
         <div className={classes.demo}>
           <ul>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Threat from substitute goods
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Substitution goods are products that have the same functions and benefits as products produced by companies. Substitution goods can be a threat to the company if the product has the same or better quality of the product produced,
                low transfer costs, and also the price of substitution products is lower than the selling price of the products produced by the company
              </Typography>
              </li>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Supplier Strength
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Product suppliers can influence an increase in prices, reduce product quality, and the amount of quantity that will be distributed to consumers,
                so that with these strengths suppliers can influence the company and also the pattern of competition in an industry.
              </Typography>
              </li>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Threats from New Arrivals
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                New entrants in an industry will be a threat to companies that play in the
                industrial environment when new entrants bring a new capacity in their efforts to enter an industrial market.
              </Typography>
              </li>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Buyer Strength
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Buyers can influence an industrial environment through its ability to reduce prices and also demand for good product quality,
               so that it will be able to influence the company in maximizing the profits to be gained.
              </Typography>
              </li>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Competition between existing companies
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               In the industrial environment, generally a company will depend on other companies, so that when a company makes a move in its strategy, other companies can certainly also move in its strategy. The most common competition is lowering prices, increasing quality,
               adding completeness, improving services, increasing guarantees and increasing advertising.
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
           <img src={require(`../assets/externalenvirontmen.png`)} className="d-block w-100" alt="..."/>
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
            "The Importance of Looking at External Environmental Factors"
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

export default ExternalFactors;
