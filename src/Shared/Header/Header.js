import { Container,Typography ,Box, CardMedia} from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../image/logo.png';
import './Header.css'


const Header = () => { 
    const {user,logout} = useAuth()
    const [bars,setBars] = useState(false);
    const handlebars = ()=>{
        bars?setBars(false):setBars(true);
    }
    return (
        <Box sx={{background:'#33ad7f',p:1,}}>
            <Container>
           
                <Box style={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>
                <Box>
               <Box className="headerBars">
               {bars? <i onClick={handlebars} className="fas fa-times"></i>: <i onClick={handlebars} className="fas fa-bars"></i>}
               </Box>
            </Box>
                   <CardMedia
                       component="img"
                       image={logo}
                       style={{width:'auto'}}
                   />
                   <Box className="navItem navItemres">
                       <Box className={bars?"navItemres":"navItemres2"}>
                       <NavLink to='/home' activeClassName="active">Home</NavLink>
                       <NavLink to='/explore' activeClassName="active">Explore</NavLink>
                       <NavLink to='/dashboard' activeClassName="active">Dashboard</NavLink>
                       {!user.email&&<NavLink to='/login' activeClassName="active">Login</NavLink>}
                       {user.email&& <NavLink onClick={logout} to='/login' activeClassName="active">LogOut</NavLink>}
                       </Box>
                   </Box>
                   <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
                   <Box sx={{display: 'flex',justifyContent: 'center',alignItems:'center'}}>
                   <Typography sx={{color: 'white',fontSize:'16px',fontWeight:'400',mx:2}} variant='h5'>
                   {user.displayName}
                   </Typography>
                  {user.email&& <Box className="userimg">
                   {user.photoURL ? <img src={user.photoURL} alt="" />:
                    <img src="https://i.ibb.co/SRBFxpM/man.png" alt="" />}
                   </Box>}
                   </Box>
                   <Box sx={{mx:2}} className="haderIcon">
                   <i className="fas fa-search"></i>
                   <i className="fas fa-shopping-basket"></i>
                   </Box>
                   </Box>
                   
                </Box>
            </Container>
        </Box>
    )
}

export default Header

