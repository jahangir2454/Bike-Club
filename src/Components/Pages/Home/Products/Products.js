import { Container, Grid,Box,Typography, CardMedia, Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Products.css'

const Products = () => {
    const [product,setProduct] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    const producted = product.slice(0,6);
    return (
       <Container>
         <Box sx={{my:3}}>
         <Grid sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}  container spacing={2}>            
               <Grid  sx={{justifyContent: 'center',alignItems: 'center',textAlign: 'center'}} item xs={12} md={6}>
                    <img src='https://parkofideas.com/renroll/demo2/wp-content/uploads/2019/11/renroll-0412721772.svg' alt="" />
                    <Typography sx={{color:'#33ad7f',fontSize:'30px',fontWeight:'500',letterSpacing:'1px'}} variant='h2'>
                    Related Products
                    </Typography>
                    <Typography sx={{fontSize:'16px',color:'#777',mb:1,fontWeight:'400'}} variant='h6'>
                    From this Collection
                    </Typography>
                </Grid> 
                </Grid> 
         </Box>
           <Grid container spacing={2}>
               {
                   producted.map(products=><Grid  item xs={12} sm={4} md={4}>
                        <Box className="products-card" sx={{m:1,p:2,boxShadow:2,minHeight:'420px',textAlign: 'center'}}>
                            <CardMedia
                                component="img"
                                image={products.productImg}
                            />
                            <Typography sx={{color:'#33ad7f',fontSize:'23px',fontWeight:'400',letterSpacing:'1px'}} variant="h6"> {products.ProductName}</Typography>
                            <Box sx={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>
                                <Typography sx={{color:'#33ad7f',fontSize:'20px'}} variant="h6">
                                   Price: ${products.ProductPrice}
                                </Typography>
                                <Rating
                                    initialRating={products.ProductReating}
                                    emptySymbol="far fa-star icon1"
                                    fullSymbol="fas fa-star icon1"
                                    readonly
                                    />
                            </Box>
                            <Typography sx={{fontSize:'15px',color:'#777',my:1}} variant="subtitle1">
                                {products.ProductDes.slice(0,120)}
                            </Typography>
                            <button  className="all-btn">Add To Cart</button>
                            </Box>
                    </Grid>)
               }
           </Grid>
       </Container>
    )
}

export default Products
