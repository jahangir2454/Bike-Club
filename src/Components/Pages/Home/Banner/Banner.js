import { Container,Box, Grid, Typography} from '@mui/material';
import React from 'react';
import './Banner.css'

const banner = {
    backgroundImage:`url( https://cdn.shopify.com/s/files/1/0434/2431/7599/files/img-4_1920X.jpg?v=1595580873)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100vh',
    width:'100%',
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Banner = () => {
    return (
        <Box style={banner}>
           <Container>
               <Grid container spacing={2}>                 
                       <Grid item xs={12} md={6}>
                       <Typography variant="h2" sx={{color:'#33ad7f',fontSize:'40px',fontWeight:'500',letterSpacing:'2px'}}>
                       Experience New Ride                   
                       </Typography>
                       <Typography variant="subtitle1" sx={{color:'#777',my:2}}>
                       Always back your scooter into the curb and sit where you can see it. The sound of the throttle makes me fall in love with our bike.  King of the bikes                                     
                       </Typography>
                       <button className="all-btn">BUY NOW</button>
                   </Grid>
               </Grid>
           </Container>
        </Box>
    )
}

export default Banner
