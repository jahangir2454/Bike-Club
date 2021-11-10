import { Container,Box, Grid, Typography, Button, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const loginImg ={
    background:`url(https://cdn.shopify.com/s/files/1/0434/2431/7599/files/slider-2_2000x_1_2000x.jpg?v=1595491220)`,
    height:'100vh',
    width:'100%',
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    display:'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}


const Signup = () => {
    const location = useLocation();
    const history = useHistory();
    const {googleSignIn,createUser,error,user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        if(data.password !== data.password2) {
            alert('password not metch')
            return;
        }
        createUser(data.email,data.password,data.name,location,history);
    };
    console.log(user)
    const handleGoogle = () => {
        googleSignIn(location,history);
    }
    return (
        <Box style={loginImg}>
            <Container>
            <Grid sx={{justifyContent: 'flex-end',alignItems: 'center',textAlign: 'center'}} container spacing={2}>
                <Grid item xs={12} md={5}>
                  <Box sx={{color:'#fff',boxShadow:2,p:3,background:'#33ad7f'}}>
                      <Typography sx={{my:2}} variant='h4'>
                            Create A New Account
                      </Typography>
                      <Box sx={{my:1}} className="gooleIcon">
                          <Button onClick={handleGoogle}><i className="fab fa-google"></i></Button>
                          <Button><i className="fab fa-google"></i></Button>
                      </Box>
                      <Box sx={{my:2}}>
                          <NavLink  style={{marginRight:'15px',textDecoration:'none',color:'white',fontWeight:'500',fontSize:'20px'}} to='/login'>SIGN IN</NavLink>
                          <NavLink  style={{marginLeft:'15px',marginTop:'10px',textDecoration:'none',color:'white',fontWeight:'500',fontSize:'20px'}} to='/signup'>SIGN UP</NavLink>
                      </Box>
                      <Box>
                      <form className='loginform' onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input placeholder="Enter Your Name" type='text' {...register("name",{required:true})} />
                            <input placeholder="Enter Your Email" type='email' {...register("email", { required: true })} />
                            <input placeholder="Enter Your Password" type='password' {...register("password", { required: true })} />
                            <input placeholder="Confirm Password" type='password' {...register("password2", { required: true })} />
                            <Box  style={{textAlign: 'start',marginLeft:'10px'}}>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox sx={{color:'#fff'}}/>}
                                label="Stay Signed In"
                                
                                />
                            </Box>
                            <button className="formbtn" type="submit">SIGN IN</button>
                        </form>
                            <Typography variant='subtitle'>
                                {error}
                            </Typography>
                        <Box>
                            <Typography style={{cursor:'pointer'}} variant="subtitle1">
                                Forgot Password ?
                            </Typography>
                        </Box>
                      </Box>
                  </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}

export default Signup;
