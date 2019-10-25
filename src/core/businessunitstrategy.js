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


const BusinessUnitStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/businessunitstrategy">
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
         The first thing to do in developing a business unit strategy is to measure two main dimensions, namely market attractiveness and business strength, in which to measure two dimensions we can use one of the measuring tools namely the General Electric (GE) matrix
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
          Strategic planning must be able to identify the factors that underlie each dimension and find ways to measure it and incorporate it into an index. Market attractiveness varies by market size, annual market growth rate, historical profit rate, and so on. Business strength varies based on the company's market share, market share growth, product quality, and so on.
          The GE model makes strategic planners look at more factors in evaluating an actual and potential business.
        </Typography>
        <br/>
        <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
          The General Electric (GE) Matrix
        </Typography>
        <img src={require(`../assets/gematrix.png`)} className="d-block w-100" alt="..."/>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
         The GE matrix is divided into nine cells, grouped into three zones:
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          Cells I, II, and IV indicate that a strong business unit must obtain investment or be developed by the company.
        </Typography>
        <br/>
        <Typography variant="body2" color="textSecondary" component="p">
         In cell I, the strategy that can be done is a strategy to protect the market through:
        </Typography>
        <Grid item xs={12} md={12}>
         <div className={classes.demo}>
           <ul>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Investment in order to grow with the maximum level that can be handled
              </Typography>
              </li>
              <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Concentrate on maintaining strength
              </Typography>
              </li>
           </ul>
         </div>
       </Grid>

       <Typography variant="body2" color="textSecondary" component="p">
        In cell II, the strategy that can be done is an investment strategy to build through:
       </Typography>
       <Grid item xs={12} md={12}>
        <div className={classes.demo}>
          <ul>
             <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Trying to win the position of leader
             </Typography>
             </li>
             <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Building selectively based on strength
             </Typography>
             </li>
             <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Strengthen areas that are vulnerable to attack
             </Typography>
             </li>
          </ul>
        </div>
      </Grid>

      <Typography variant="body2" color="textSecondary" component="p">
        In cell IV, the strategy that can be carried out is to carry out selective development through:
      </Typography>
      <Grid item xs={12} md={12}>
       <div className={classes.demo}>
         <ul>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Make a large investment in an attractive segment
            </Typography>
            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Build the ability to overcome competition
            </Typography>
            </li>
            <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Emphasizing profitability by increasing productivity
            </Typography>
            </li>
         </ul>
       </div>
     </Grid>

     <Typography variant="body2" color="textSecondary" component="p">
       Cells III, V, and VII indicate that the business unit has a medium overall level of power,
       where the company must seek selectivity and manage it to generate revenue in the business unit.
     </Typography>
     <br/>
     <Typography variant="body2" color="textSecondary" component="p">
      In cell III, the strategy that can be done is to selectively build through:
     </Typography>
     <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        <ul>
           <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Specializes in limited strengths
           </Typography>
           </li>
           <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Look for a way to overcome weaknesses
           </Typography>
           </li>
           <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Withdrawal if there are indications of lack of signs of sustainable growth.
           </Typography>
           </li>
        </ul>
      </div>
    </Grid>

    <Typography variant="body2" color="textSecondary" component="p">
     In cell V, the strategy that can be done is to selectivity or manage to generate revenue through:
    </Typography>
    <Grid item xs={12} md={12}>
     <div className={classes.demo}>
       <ul>
          <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Protect existing programs.
          </Typography>
          </li>
          <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Investment is centered on segments with good profitability and relatively low risk.
          </Typography>
          </li>
       </ul>
     </div>
   </Grid>

   <Typography variant="body2" color="textSecondary" component="p">
     In cell VII, the strategy that can be done is to protect and refocus through:
   </Typography>
     <Grid item xs={12} md={12}>
        <div className={classes.demo}>
             <ul>
              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Management to maintain current income
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Concentrate on attractive segments
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                 Maintain strength
                </Typography>
              </li>
            </ul>
         </div>
      </Grid>

      <Typography variant="body2" color="textSecondary" component="p">
       Cells VI, VIII, and IX indicate business units that have low overall attractiveness, where the company must give serious thought to harvesting or releasing the business unit
      </Typography>
      <br/>
      <Typography variant="body2" color="textSecondary" component="p">
        In cell VI, the strategy the company can undertake is to expand or harvest through:
      </Typography>
        <Grid item xs={12} md={12}>
           <div className={classes.demo}>
                <ul>
                 <li>
                   <Typography variant="body2" color="textSecondary" component="p">
                     Look for ways to grow without great risk, or minimize investment and streamline operations
                   </Typography>
                 </li>
               </ul>
            </div>
         </Grid>

         <Typography variant="body2" color="textSecondary" component="p">
           In cell VIII, the strategy that can be taken is to manage to generate income through:
         </Typography>
           <Grid item xs={12} md={12}>
              <div className={classes.demo}>
                   <ul>
                    <li>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Protect the most profitable segment position
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Improve product lines
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Minimize investment
                      </Typography>
                    </li>
                  </ul>
               </div>
            </Grid>

            <Typography variant="body2" color="textSecondary" component="p">
              In cell IX, the strategy can be done is to release the business unit through:
            </Typography>
              <Grid item xs={12} md={12}>
                 <div className={classes.demo}>
                      <ul>
                       <li>
                         <Typography variant="body2" color="textSecondary" component="p">
                           Selling business units at a time that will maximize cash value.
                         </Typography>
                       </li>
                       <li>
                         <Typography variant="body2" color="textSecondary" component="p">
                           Monitoring fixed costs and avoiding investments for a while
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
           <img src={require(`../assets/unitbusiness.jpg`)} className="d-block w-100" alt="..."/>
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
            "How to Create a Business Unit Strategy?"
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

export default BusinessUnitStrategy;
