import { Grid } from "@mui/material";
import Air5 from '../../images/Air5.jpg'

const Home = () => {
  return <>
    <Grid container justifyContent='center'> 
      <Grid item sm={10} sx={{
        backgroundImage: `url(${Air5})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200px',
        backgroundPosition: 'right top'
      }}>
        <Grid style={{color: 'black'}}>
        <h1 >Welcome to InfyAir</h1>
        <h5>The World on Wings, since 1972</h5>
        <hr />
        <p style={{fontSize: 13, textIndent: 20}}>
        Worldwide, airlines carry more than 3 billion passengers a year and deliver about one-third of traded goods by value. 
        Aviation sector employment also is seen as strong. Airlines employ about 2.5 million workers and expect “to accelerate the pace of hiring over the next year”. Overall, about 9 million people are employed in the global aviation sector. In the United States alone, there are almost 20,000 airports. Whether you are interested in working for a major airline carrier, an international airport, a government agency or a general aviation service provider, an associate's or bachelor's degree in aviation management can provide the foundational and specialised knowledge needed to succeed in a range of careers. As we all know that airline industry has seen much development after the post World War II period. With the progress in aviation techniques, airlines have paved a way for making travel and tourism better in every way. Hence, it plays a major role in the travel and tourism. The airline industry exists in an intensely competitive market. </p>
        <p style={{fontSize: 13,textIndent: 20}}>Observing a growth of 17.62% over the past year and with the recent development, there has been a significant increase in the airline opportunities. Both domestic and international airlines require trained professional on the airports for different kinds of jobs including ground staff, flight attendants, ticketing counters as well as air hostesses. Thus,looking at the wider scope of the airline industry, it is very much beneficial for the travel industry.</p> 
        </Grid>
    </Grid>
    </Grid>
  </>;
};

export default Home;
