import { Container,Typography ,Box, CardMedia} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Header.css'
const Header = () => { 
    return (
        <Box sx={{background:'#33ad7f',p:1,}}>
            <Container>
                <Box style={{display:'flex',justifyContent:'space-between',alignItems: 'center'}}>
                   <CardMedia
                       component="img"
                       image={logo}
                       style={{width:'auto'}}
                   />
                   <Box className="navItem">
                       <NavLink to='/home' activeClassName="active">Home</NavLink>
                       <NavLink to='/dashboard' activeClassName="active">Dashboard</NavLink>
                       <NavLink to='/contact' activeClassName="active">contact</NavLink>
                       <NavLink to='/blog' activeClassName="active">blog</NavLink>
                   </Box>
                   <Box className="haderIcon">
                   <i className="fas fa-search"></i>
                   <i className="fas fa-user"></i>
                   <i className="fas fa-shopping-basket"></i>
                   </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header

