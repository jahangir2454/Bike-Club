
import React from 'react';
import  { useState } from 'react';
import { Container,Box, Grid, Typography} from '@mui/material';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset,watch, formState: { errors }  } = useForm();
    const [email,setEmail] = useState(' ')
    const makeAd = {
        background:`url(https://cdn.shopify.com/s/files/1/0434/2431/7599/files/slider-2_2000x_1_2000x.jpg?v=1595491220)`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }

    const handleadmin = e=> {
        setEmail(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        const user ={email}
        console.log(user);
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
        })

    }
    
    return (
        <div style={makeAd}>
            <Container>
               <Grid  sx={{justifyContent: 'center', alignItems: 'center',display:'flex'}} container spacing={2}>
                   <Grid   item xs={12} md={6}>

                   <Box className="addProductForm" sx={{textAlign: 'center',display:'flex',justifyContent: 'center',boxShadow:3}}>
                     <Box>
                     <Typography sx={{fontWeight: '500',fontSize:"30px",color:"white"}} variant="h3">
                    Add Admin
               </Typography>
                     <form onSubmit={onSubmit}>
                        <input placeholder="email" type="email" name="email" onBlur={handleadmin} />
                        {/* <input placeholder="Enter Email" />
                        <input placeholder="Phone Number"  /> */}
                        <button type="submit" className="formbtn">Submit</button>
                    </form>
                     </Box>
                     </Box>
                   </Grid>
               </Grid>
            </Container>
        </div>
    )
}

export default MakeAdmin
