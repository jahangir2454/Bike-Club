import React from 'react';
import { CardMedia, Container,Box,Grid, Typography } from '@mui/material'
import { padding } from '@mui/system';

const reviewImg = {
    background:`url(https://cdn.shopify.com/s/files/1/0434/2431/7599/files/slider-3_2000x_1_2000x.jpg?v=1595490715)`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100vh',
    width:'100%',
}
const reviewbox = {
    background:'#fff',
    padding:'20px',
}

const Review = () => {
    return (
        <Box style={reviewImg}>
            <Container>              
                    <Grid sx={{justifyContent: 'flex-end',alignItems: 'center',textAlign: 'center',display: 'flex'}}container spacing={2}>
                        <Grid item xs={8} md={5}>
                            <Box sx={{boxShadow:3}} style={reviewbox}>
                                <Typography sx={{color:'#33ad7f',my:1}} variant="h6">
                                    Plase Review any products
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
            </Container>
        </Box>
    )
}

export default Review;
