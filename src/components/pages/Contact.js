import { Grid } from "@mui/material";
import contact from '../../images/contact.png'

const Contact = () => {
  return <>
    <Grid container justifyContent='center' >
      <Grid item sm={10} sx={{
        backgroundImage: `url(${contact})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 280,
        backgroundPosition: "right bottom"
      }}>
        <h1>Contact Us</h1>
        <hr />
        <h5>InfyAir contact numbers for callers in India</h5>
        <p style={{fontSize:13}}>Call 24x7 Customer Care numbers 0124-2641407 / 020-26231407 / 1860 233 1407 <br/>from MTNL / BSNL lines and Mobile / landlines of most private telecom operators in India only.</p>
        <h5>InfyAir contact numbers for callers outside India</h5>
        <p style={{fontSize:13}}>USA & Canada:1888 634 1407 (Toll Free)<br/>
            UK0800 048 9254 (Toll Free)<br/>
            Australia613 701 98270 (Toll Number)<br/>
            France331 874 06644 (Toll Number)<br/>
            Germany496925511337 (Toll Number)<br/>
            Singapore800 101 4016 (Toll Free)</p>
        <h5>InfyAir officail contacts</h5>
    
        <a style={{fontSize:13}}>For any queries, concerns or complaints, please contact us through e-mail at world_dpo@infyair.org<br/>Official Website:</a><a href="http://localhost:3000" style={{fontSize:13}}> www.InfyAir.org</a>
    
      </Grid>
    </Grid> 
  </>;
};

export default Contact;
