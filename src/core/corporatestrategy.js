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


const CorporateStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/corporatestrategy">
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
         The first thing to do in developing a corporate strategy is to evaluate and
         also analyze the company's external environmental factors and also analyze the company's internal environmental factors
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
         one of the tools that can be used to analyze the company's external environment with the EFE Matrix, from the EFE Matrix we can get a summary and also an evaluation derived from external factors such as economic, socio-cultural, demographic, legal and political,
         technological and also industry competition so that we can determine the success factors that are identified from observing external factors, which include opportunities and threats for the company
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
         one of the tools that can be used to analyze the company's internal environment with the IFE Matrix, from the IFE Matrix we can get a summary and evaluate the strengths and weaknesses of the company
        </Typography>
        <br/>
        <Typography gutterBottom variant="h6" component="h2">
          Matrix The Internal-External (IE)
        </Typography>
        <img src={require(`../assets/corporatestrategy.png`)} className="d-block w-100" alt="..."/>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           The IE Matrix is divided into three main areas with different strategy implications
         </Typography>
         <br/>
        <Typography gutterBottom variant="subtitle1" component="h2" >
          Grow and Build (Cell I, II, or IV)
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Companies that are in a position to Grow and Build, can use intensive strategies such as market penetration strategies, product development strategies, market development strategies, or integrative strategies such as backward integration,
          forward integration, and horizontal integration strategies.
        </Typography>
        <br/>
        <Typography gutterBottom variant="subtitle1" component="h2" >
          Hold and Maintain (Cell III, V, or VII)
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          companies that are in a position of Hold and Maintain strategies
          that can be used are market penetration strategies, product development strategies.
        </Typography>
        <br/>
        <Typography gutterBottom variant="subtitle1" component="h2" >
          Harvest or Divest (Cell VI, VIII, or IX)
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         companies that are in a Harvest or Release strategy position
         must give seriously to harvest or release
        </Typography>
      </div>
      )
    )
  }

  const showViewImage = (showImage) => {
    return(
      showImage && (
        <div >
           <img src={require(`../assets/corporatestrategy.png`)} className="d-block w-100" alt="..."/>
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
            "How to Create a Corporate Strategy?"
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

export default CorporateStrategy;
