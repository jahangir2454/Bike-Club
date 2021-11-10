import { Container,Box, Grid, Typography} from '@mui/material';
import React from 'react';
import './Footer.css';
import mail  from '../../image/mail.png';
import logo from '../../image/footer-logo.png';

const input ={
    border:'none',
    outline:'none',
    width:'100%',
    padding:'20px 10px',
    zIndex:'-1'
}


const Footer = () => {
    return (
        <Box>
       <Box sx={{background:'#33ad7f',py:3}}>
           <Container>
               <Grid container spacing={2}>
                       <Grid item xs={12} md={7}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={5}>
                             <Box sx={{display:'flex'}}>
                                <img  src={mail} alt="" />
                                <Typography sx={{mx:2,color:'#fff',fontSize:'35px',fontWeight:'500'}} variant="h4">
                                Newsletter
                                </Typography>
                             </Box>
                            </Grid>
                            <Grid item xs={6} md={7}>
                                <Box>
                                    <Typography variant="subtitle2" sx={{color:'#fff',fontSize:'20px',fontWeight:'300'}}>
                                    Enter your email and well send you a coupon with 10 off your next order
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                       </Grid>
                       <Grid item xs={12} md={5}>
                        <Box sx={{width:'100%',position:'relative'}}>
                        <input style={input} type="text"/>
                        <button className='footer-btn'>submit</button>
                        </Box>
                       </Grid>
               </Grid>
           </Container>
       </Box>
        <Box sx={{background:'#3b3b3b',py:3}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <img style={{width:'auto'}} src={logo} alt="" />
                            <Typography sx={{fontWeight:'300',color:'#a0a0a0',fontSize:'14px',marginTop:'10px',lineHeight:'26px'}} variant="subtitle1">
                            Muis sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,...
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Box>
                            <Typography sx={{color:'#fff',textTransform:'capitalize',letterSpacing:'2px',fontSize:'20px',fontWeight:'500',marginBottom:'10px'}} variant="h2">
                            Shop by
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Your Orders
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Your Wishlist
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Payment
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Delivery
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Conditions
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Box>
                            <Typography sx={{color:'#fff',textTransform:'capitalize',letterSpacing:'2px',fontSize:'20px',fontWeight:'500',marginBottom:'10px'}} variant="h2">
                            Products
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Prices drop
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            New products
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Best sales
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Stores
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Login
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Box>
                            <Typography sx={{color:'#fff',textTransform:'capitalize',letterSpacing:'2px',fontSize:'20px',fontWeight:'500',marginBottom:'10px'}} variant="h2">
                            Our Company
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Delivery
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            About us
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Contact us
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Sitemap
                            </Typography>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer'}} variant="subtitle2">
                            Stores
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <Typography sx={{color:'#fff',textTransform:'capitalize',letterSpacing:'2px',fontSize:'20px',fontWeight:'500',marginBottom:'10px'}} variant="h2">
                            Contact
                            </Typography>
                            <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                            <i style={{color:'#33ad7f',fontSize:'25px',cursor:'pointer'}} className="fas fa-map-marker-alt"></i>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer',mx:1}} variant="subtitle2">
                            44 Shirley Ave, West Chicago, IL 60185 Angelo
                            </Typography>
                            </Box>
                            <Box sx={{display: 'flex',mt:2}}>
                            <i style={{color:'#33ad7f',fontSize:'25px',cursor:'pointer'}} className="fas fa-phone"></i>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer',mx:1}} variant="subtitle2">
                            0123 456 789 
                            </Typography>
                            </Box>
                            <Box sx={{display: 'flex',mt:2}}>
                            <i style={{color:'#33ad7f',fontSize:'25px',cursor:'pointer'}} className="fas fa-envelope"></i>
                            <Typography sx={{color:'#a0a0a0',fontWeight:'300', fontSize:'18px',cursor:'pointer',mx:1}} variant="subtitle2">
                            0123 456 789 
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box style={{border: '1px solid #33ad7f'}}>
        </Box>
       <Box sx={{background:'#3b3b3b',py:2}}>
       <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography style={{color: '#a0a0a0',cursor: 'pointer'}} variant="subtitle1">    
                    Copyright © 2013-present Magento, Inc. All rights reserved
                    </Typography>
                </Grid>
            </Grid>
        </Container>
       </Box>
       </Box>
    )
}

export default Footer;
