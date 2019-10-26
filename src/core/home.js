import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductOne from './productone';
import ExternalFactors from './externalfactor';
import InternalFactors from './internalfactor';
import Strategy from './strategy';
import CorporateStrategy from './corporatestrategy';
import BusinessUnitStrategy from './businessunitstrategy';
import CompetitiveStrategy from './competitivestrategy';
import MarketLeadersStrategy from './marketleadersstrategy';
import MarketChallengersStrategy from './marketchallengersstrategy';
import MarketFollowersStrategy from './marketfollowersstrategy';
import MarketingMixStrategy from './marketingmixstrategy'

const useStyles = makeStyles(theme => ({
  space:{
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.space}>
       <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={6}>
             <ProductOne
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <ExternalFactors
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <InternalFactors
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <Strategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <CorporateStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <BusinessUnitStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <CompetitiveStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <MarketLeadersStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <MarketChallengersStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <MarketFollowersStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
         <Grid item xs={12} sm={6} md={6}>
             <MarketingMixStrategy
              showParagraf = {false}
              showImage = {true}
              showBack = {false}
              showRead = {true}
             />
         </Grid>
       </Grid>
    </Container>
  )
}

export default Home;
