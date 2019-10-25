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


const ManagementStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/management-strategy">
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
           Many entrepreneurs that I meet would said "My company will be a leader in the industry", in my opinion it is not wrong as long as they can distinguish between their goals and strategies. because there are many examples of new companies that use the right management strategy to achieve their
           goals and defeat large companies to be leaders in the industry.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           In formulating the right strategy, the company must have a clear vision to be able to know what the company wants to achieve in the future, the statement in the company's vision is the most fundamental stage in determining strategic planning. The mission of the company is a statement that becomes the identity of a company regarding the operational range of the products produced and also the market to be served, the mission statement is also a fundamental goal that can be the difference between the business run by the company and other companies, by owning a clear mission statement of a company will be able to explain the values and priorities carried out by the company.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           After having a clear vision and mission statement, in forming and making strategic decisions at the corporate level required an environmental analysis that is the company's external environmental analysis and the company's internal analysis. The environmental analysis is carried out by the company carried out to be able to see what conditions and factors that are around the company environment that can affect an industry or company. From the results of the environmental analysis it is expected that a company can carry out an appropriate strategy in its effort to win the competition and run its business effectively and appropriately.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
          After determining the corporate strategy, the next stage is the company must be able to determine the strategy of the
          business unit or the product produced. In determining the business unit strategy, an analysis is needed to help the company in knowing the position of the products produced in industrial competition, so it is expected to facilitate the company in determining the right strategy for each product produced.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
          After being able to determine the right business unit strategy, the company needs a functional strategy in this case the company can use a marketing mix strategy consisting of 4P components (Product, Price, Place, and Promotion) for Industry manufacture and 7P components (Product, Price, Place , Promotion, People, Process, and Physical Evidence) for the service industry in implementing a product to win the competition in the industry
         </Typography>
         <br/>
         <Typography gutterBottom variant="h6" component="h2">
           How to Formulating Strategy
         </Typography>
           <img src={require(`../assets/strategiesformulating.png`)} className="d-block w-100" alt="..."/>
         <br/>
         <Typography gutterBottom variant="h6" component="h2">
           Company Vision and Mission
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           In a company vision and mission that are needed in forming and making strategic decisions. The following is an understanding of the vision and mission (David, 2007).
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           The company's vision is a statement of the most basic to be achieved by a company in the future. By having a clear vision statement,
           a company will have a clear basis in developing a company's mission.
         </Typography>
         <br/>
         <Typography variant="body2" color="textSecondary" component="p">
           The company's mission is a statement that can explain the business that is run by the company. By having a clear mission statement, a company will be able to define the fundamental objectives that can distinguish a company from other companies, and can also
           explain what is desired by the company and also the market to be served by the company.
         </Typography>
         <br/>
         <Typography gutterBottom variant="h6" component="h2">
           External Environment
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
           The company's external environment are factors that are outside the company environment that can affect an industry as well as the company's performance and competitive advantage strategies contained therein.
           The company's external environment consists of the general environment and industrial environment.
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
           The general environment is an element that exists in outside society that can directly affect an industry and the companies contained therein.
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
           Industrial environment is an environment that must be considered by companies in determining a competitive advantage strategy to win competition in an industrial environment.
          </Typography>
          <br/>
          <Typography gutterBottom variant="h6" component="h2">
            Internal Environment
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Internal environment is an environment within the company in the form of resources owned by the company that serves to support the company's performance in achieving competitive advantage.
           Internal environmental analysis is needed to be able to identify the strengths or weaknesses of the company's resources
          </Typography>
          <br/>
          <Typography gutterBottom variant="h6" component="h2">
            Strategy
          </Typography>
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
                  Where (where industries and product markets to focus on)
                </Typography>
               </li>
               <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  How (allocating resources to each product-market to respond to opportunities and threats so as to gain a competitive advantage).
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
           <img src={require(`../assets/moutains.jpg`)} className="d-block w-100" alt="..."/>
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
            "My Company Will Be a Leader In The Industry"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            October 20, 2019
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

export default ManagementStrategy;
