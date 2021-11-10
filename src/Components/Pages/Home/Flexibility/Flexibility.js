import { Container, Grid, Typography,Box } from '@mui/material'
import React from 'react';
import haeading from '../../../../image/heading.png'

const Flexibility = () => {
    return (
       <Box sx={{my:5}}>
            <Container>
            <Grid sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}  container spacing={2}>            
               <Grid  sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center'}} item xs={12} md={6}>
                    <img src='https://parkofideas.com/renroll/demo2/wp-content/uploads/2019/11/renroll-0412721772.svg' alt="" />
                    <Typography sx={{color:'#33ad7f',fontSize:'30px',fontWeight:'500',letterSpacing:'1px',my:2}} variant='h2'>
                    Flexibility, Agility & Freedom to go Anywhere, Anytime
                    </Typography>
                    <Typography sx={{fontSize:'16px',color:'#777',mb:1,fontWeight:'400'}} variant='h6'>
                    Look at available scooters & Bikes for you
                    </Typography>
                </Grid>            
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img  style={{width:'auto'}} src="https://parkofideas.com/renroll/demo2/wp-content/uploads/2020/01/renroll-1258370777.jpg" alt="" />
                </Grid>
                <Grid sx={{mt:4}} item xs={12} md={6}>
                    <Typography sx={{color:'#33ad7f',fontSize:'22px',mb:2,}} variant='h6'>
                    Get Free Helmets
                    </Typography>
                    <Typography sx={{color:'#4b4b4b',lineHeight:'26px'}} variant='subtitle'>
                    Aiusmod tempor incididunt labore loremy enim veniams lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis.
                    Nostrud exercita aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </Typography>
                    <button style={{marginTop:'15px'}} className='all-btn'>Read More</button>
                </Grid>
            </Grid>
        </Container>
       </Box>
    )
}

export default Flexibility
