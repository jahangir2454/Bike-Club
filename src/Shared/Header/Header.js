import { Container,Typography ,Box, CardMedia} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../image/logo.png';
import './Header.css'


const Header = () => { 
    const {user,logout} = useAuth()
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
                       <NavLink to='/explore' activeClassName="active">Explore</NavLink>
                       <NavLink to='/dashboard' activeClassName="active">Dashboard</NavLink>
                       {!user.email&&<NavLink to='/login' activeClassName="active">Login</NavLink>}
                       {user.email&& <NavLink onClick={logout} to='/login' activeClassName="active">LogOut</NavLink>}
                   </Box>
                   <Box className="haderIcon">
                   <i className="fas fa-search"></i>
                   <i className="fas fa-shopping-basket"></i>
                   </Box>
                   <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
                   <Typography sx={{color: 'white',fontSize:'16px',fontWeight:'400',mx:2}} variant='h5'>
                   {user.displayName}
                   </Typography>
                  {user.email&& <Box className="userimg">
                   {user.photoURL ? <img src={user.photoURL} alt="" />:
                    <img src="https://i.ibb.co/SRBFxpM/man.png" alt="" />}
                   </Box>}
                   </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header

