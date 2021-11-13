import React, { useState } from 'react';
import { Container,Box,Grid, Typography } from '@mui/material'
import './Review.css';
import Rating from '@mui/material/Rating';
import useAuth from '../../../../Hooks/useAuth';

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
    const {user} = useAuth();
    const [value, setValue] = useState(2);
    const [review,setReview] = useState();

    const handletex = e=> {
        setReview(e.target.value)
    }
    const handleReview = e=> {
        e.preventDefault();
        const allReview={
            rating:value.toString(),
            review:review,
            user:user,
        }
        fetch('https://boiling-harbor-34572.herokuapp.com/review',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(allReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    return (
        <Box style={reviewImg}>
            <Container>              
                    <Grid sx={{justifyContent: 'flex-end',alignItems: 'center',textAlign: 'center',display: 'flex'}}container spacing={2}>
                        <Grid item xs={8} md={5}>
                            <Box sx={{boxShadow:3}} style={reviewbox}>
                                <Typography sx={{color:'#33ad7f',my:1}} variant="h6">
                                    Plase Review any products
                                </Typography>
                                <Box className="reviewform">
                                <form  onSubmit={handleReview}>
                                <textarea onBlur={handletex} name="review" type="text"/>
                                <Box>
                                <Typography component="legend">Review</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                        }}
                                    />
                                </Box>
                                 <button className="all-btn" type="submit">Submit</button>
                                </form>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
            </Container>
        </Box>
    )
}

export default Review;
