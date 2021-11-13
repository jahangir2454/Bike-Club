import { Container,Box, Grid, Typography, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css';




const ShowReviews = () => {
    const [review,setReview] =useState([]);
    useEffect(()=>{
        fetch('https://boiling-harbor-34572.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[]);
    console.log(review)
    return (
        <Box>
            <Container>
            <Grid sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center',my:2}}  container spacing={2}>            
               <Grid  sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center'}} item xs={12} md={6}>
                    <img src='https://parkofideas.com/renroll/demo2/wp-content/uploads/2019/11/renroll-0412721772.svg' alt="" />
                    <Typography sx={{color:'#33ad7f',fontSize:'30px',fontWeight:'500',letterSpacing:'1px',my:2}} variant='h2'>
                    Client Review
                    </Typography>
                </Grid>            
            </Grid>
                <Box className="reviewBox">
                <Grid container spacing={2}>
                   {
                       review.map(rev=><Grid item xs={12} md={4}>
                        <Box className="review-card">
                         <Box className="reviewphoto">
                             {rev?.user?.photoURL? <img src={rev?.user?.photoURL} alt="" />:
                             <img src="https://i.ibb.co/SRBFxpM/man.png" alt="" />}
                        
                         </Box>
                            <Typography sx={{color:'#191919',lineHeight:'26px'}} variant="subtitle2">
                              {rev.review.slice(0,150)}
                            </Typography>
                            <Typography sx={{color:'#33ad7f',fontSize:'20px',py:1}} variant="h3">
                                {rev?.user?.displayName}
                            </Typography>
                            <Rating
                                    initialRating={rev?.rating}
                                    emptySymbol="far fa-star icon1"
                                    fullSymbol="fas fa-star icon1"
                                    readonly
                                />
                        </Box>
                    </Grid>)
                   
                   }
                </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ShowReviews;
