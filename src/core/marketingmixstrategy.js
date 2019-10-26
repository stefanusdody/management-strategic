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


const MarketingMixStrategy = ({
  showParagraf=true,
  showImage=true,
  showBack=true,
  showRead=false
  }) => {
  const classes = useStyles();

  const showReadButton = (showRead) => {
    return(
      showRead && (
        <Button size="small" color="primary" href="/marketingmixstrategy">
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
         After analyzing and determining the corporate strategy and business unit strategy, the next step carried out by the company is to establish a functional strategy. The company can use the marketing mix strategy as a functional strategy to achieve marketing objectives in the target market.
         The marketing mix strategy consists of 4P namely product strategy, price strategy, distribution strategy (place) and promotion strategy (promotion)
        </Typography>
        <br/>
        <Typography gutterBottom variant="subtitle1" component="h2" >
          Product Strategy
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Products can be classified into three groups based on their durability and appearance (Kotler, ang, leong, tan, keller, 2009):
        </Typography>
        <Grid item xs={12} md={12}>
        <div className={classes.demo}>
          <ul>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Non Durable Goods
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A tangible item that can usually be consumed for one or several uses
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Durable Goods
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A tangible item that can usually be used in many uses
              </Typography>
             </li>
             <li>
              <Typography variant="body2" color="textSecondary" component="p">
                Service
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Is an intangible item, inseparable, changeable, and not durable. And to get good results requires a control over the quality, credibility of the supplier, and adaptability
              </Typography>
             </li>
          </ul>
        </div>
       </Grid>
       <Typography variant="body2" color="textSecondary" component="p">
        The strategy taken to win a competition is to differentiate the product, in this case the product differentiation strategy that may be carried out by the company is:
       </Typography>
       <Grid item xs={12} md={12}>
       <div className={classes.demo}>
         <ul>
            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Shape Differentiation
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Shape differentiation that may be done is in terms of size, shape or physical structure of the product that can be a measure of capacity, shape of packaging, color, coating, and also the reaction time
             </Typography>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Differentiation of Completeness
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Most products can be offered with various equipment to complete the basic functions of the product.
               Being the first to introduce valuable new equipment is one of the most effective ways to compete
             </Typography>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Differentiation in the quality of performance
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Performance quality is the operational level of the main characteristics of the product. The strategies that can be carried out by companies are:
             </Typography>
             <ul>
               <li>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Producers must design a level of performance in accordance with the target market and the level of performance of competitors in which the company must manage the quality of performance by continuously improving products from time to time so that it can generate profits and can affect market share
                 </Typography>
               </li>
               <li>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Producers maintains the quality of the product at a certain level, that is by keeping the quality of the product unchanged after the first launch unless there is a real failure or there is an opportunity to fix it
                 </Typography>
               </li>
               <li>
                 <Typography variant="body2" color="textSecondary" component="p">
                  Producers gradually reduce product quality, which reduces quality to cover increased costs, reduces quality to increase profits even though it can adversely affect profitability over a long period of time.
                 </Typography>
               </li>
             </ul>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Differentiation of durability
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               durability is a measure of the expected operational life span of a product under normal or stressful conditions,
               and is a valued attribute for certain products where generally buyers will be willing to pay more for products that have a reputation for long durability
             </Typography>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Reliability Differentiation
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Reliability is the size of a product that will not be damaged or fail to function within a certain period. Consumers generally will pay a higher price for a reliable product.
             </Typography>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Differentiation of ease of repair
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Ease of repair is a measure of how easy it is to repair a product if it is damaged or not functioning, where ideally the ease of repair will arise if consumers can repair their products themselves with little cost or time
             </Typography>
            </li>

            <li>
             <Typography variant="body2" color="textSecondary" component="p">
               Design Differentiation
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               The design describes the appearance and taste that the product gives to the consumer, where the design can provide advantages because it can create differences that are difficult to copy. In design differentiation, product packaging is the most important weapon, especially for food products, cosmetics, personal care devices, and small consumer equipment. Packaging can give a first impression on the product so that it can influence the buyer's decision
             </Typography>
            </li>

         </ul>
       </div>
      </Grid>

      <Typography gutterBottom variant="subtitle1" component="h2" >
        Price Strategy
      </Typography>

      <Typography variant="body2" color="textSecondary" component="p">
       A producer generally does not set a single price for its product, but it is good for the company to determine the price structure based on several variations such as demand and costs geographically, requirements of market segments, time of purchase, order level, frequency of delivery, warranty, service contracts, and other factors . The following are strategies that can be carried out by companies in setting pricing strategies (Kotler, ang, leong, tan, keller, 2009):
      </Typography>
      <Grid item xs={12} md={12}>
      <div className={classes.demo}>
        <ul>
           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Geographic pricing
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Is a pricing strategy for its products for consumers in different locations.
            </Typography>
           </li>

           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Pricing discounts and incentives
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It is a strategy where the company provides discounts to anticipate changes in customer needs and to deal with changes that might be made by competitors. while incentives are companies incurring extra costs to increase sellers to take part in special programs offered by companies. Companies must pay close attention to the available margins in determining discounts and discounts for products or services offered
            </Typography>
           </li>

           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Promotion pricing
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The following are some promotional strategies that can be carried out by companies:
            </Typography>
            <ul>
              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Loss-Leader Pricing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is done by reducing the price of lesser-known products in the hope of being able to increase consumers to buy the product. The price reduction is carried out by compensating for the level of price reduction with products that have large profit margins
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Special event pricing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is carried out by providing special prices in definite seasonal situations such as holiday events to attract consumers
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cash rebates
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is done by giving discounts in cash to consumers that are intended to attract consumers to buy products
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                  Low interest financing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is done by offering low purchase interest to consumers to attract interest from consumers
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                 Longer payment terms
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is done by providing a long payment period to consumers who are intended to attract consumers
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                 Warranties and service contracts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is done by providing promotions regarding free gifts or low warranty or service costs
                </Typography>
              </li>

              <li>
                <Typography variant="body2" color="textSecondary" component="p">
                 Psychological discounting
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This strategy is carried out by making it look as if high product prices in the past have now been lowered by the company or consumers can get cheaper prices at this time.
                </Typography>
              </li>

            </ul>
           </li>

           <li>
            <Typography variant="body2" color="textSecondary" component="p">
              Determination of price differentiation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This pricing strategy occurs if the company sells a product or service with 2 or more different prices but the cost is not proportionally different.
            </Typography>
           </li>
        </ul>
      </div>
     </Grid>

     <Typography gutterBottom variant="subtitle1" component="h2" >
       Place Strategy
     </Typography>

     <Typography variant="body2" color="textSecondary" component="p">
      Marketing distribution shows how a product moves from producers to consumers. Distribution strategies play a strategic role in facilitating the distribution of a product or service from producers to customers and plays a role in determining the type of distribution channel organization that will be used. The following are some of the distribution channels that are commonly found in consumer marketing channels, namely (Kotler, ang, leong, tan, keller, 2009)
     </Typography>

     <Grid item xs={12} md={12}>
     <div className={classes.demo}>
       <ul>
          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Zero - Channel level
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             This distribution channel is commonly referred to as a direct distribution channel (direct-marketing channel) consisting of producers who sell directly to end customers, for example is door-to-door sales
           </Typography>
          </li>

          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             One – Level channel
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             This distribution channel is a product marketing channel consisting of producers who market their products by passing the retailers first before the product reaches the hands of the final consumer
           </Typography>
          </li>

          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Two – Level channel
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
              This distribution channel is a product marketing channel consisting of producers who market their products by going through wholesalers and retailers first before the product reaches the hands of the final consumer
           </Typography>
          </li>

          <li>
           <Typography variant="body2" color="textSecondary" component="p">
             Three – Level channel
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             This distribution channel is a product marketing channel consisting of producers who market their products through wholesalers, builders, and retailers before the product reaches the end consumers.
           </Typography>
          </li>
       </ul>
     </div>
    </Grid>

    <Typography gutterBottom variant="subtitle1" component="h2" >
      Promotion Strategy
    </Typography>

    <Typography variant="body2" color="textSecondary" component="p">
     Promotion strategy is a strategy used by producers in placing the products or services they produce into the minds of consumers. Common tools used by companies in conducting a promotion are as follows (Mullins, Orville, 2010)
    </Typography>

    <Grid item xs={12} md={12}>
    <div className={classes.demo}>
      <ul>
         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Advertising
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          promotion of goods or services carried out by companies through print, radio and television.
          </Typography>
         </li>

         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Personal Selling
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Is a product or service promotion carried out to persuade potential customers to buy a product or service through a presentation (Person-to-person communication)
          </Typography>
         </li>

         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Sales promotion
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Is a product or service promotion that is done by doing a stimulation of consumers to increase product sales in a short period of time. Examples are bundling products, coupons and exhibits
          </Typography>
         </li>

         <li>
          <Typography variant="body2" color="textSecondary" component="p">
            Public Relations
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Is a promotion of a product or service that is done through non-personal media such as print media, and radio by preaching a significant news that can stimulate a request from a product or service
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
           <img src={require(`../assets/marketingmix.jpeg`)} className="d-block w-100" alt="..."/>
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
            "The Marketing Mix Strategy"
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

export default MarketingMixStrategy;
