import React, { useState } from 'react';
import { Container,Box, Grid, Typography} from '@mui/material';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import swal from 'sweetalert';

const addback = {
    background: `url(https://cdn.shopify.com/s/files/1/0434/2431/7599/files/slider-3_2000x_1_2000x.jpg?v=1595490715)`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width:'100%',

}

const AddProduct = () => {
    const { register, handleSubmit, reset,watch, formState: { errors }  } = useForm();
    const date = new Date().toDateString();
    const onSubmit = data => {
        const newAdd ={
            data:data,
            tiem:date,
        }
        console.log(newAdd,'addProduct')
      fetch('http://localhost:5000/product',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newAdd)
      })
      .then(res=>res.json())
      .then(result=>{
          if(result.insertedId){
                popupAlert()
                reset()
          }
      })
  };
 
 
//   Alert js
const popupAlert = ()=>{
    swal({
        title: "Good job!",
        text: "Product Add Your site",
        icon: "success",
        button: "OK",
      });
}
// ====
    return (
        <Box style={addback} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}>
           <Container>
               <Grid container spacing={2}  sx={{justifyContent: 'flex-end',alignItems: 'center',textAlign: 'center'}}>
               
                   <Grid item xs={12} md={6} >
                     <Box className="addProductForm" sx={{textAlign: 'center',display:'flex',justifyContent: 'center',boxShadow:3}}>
                     <Box>
                     <Typography sx={{fontWeight: '500',fontSize:"30px",color:"white"}} variant="h3">
                    Add Your Products
               </Typography>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter image Link" {...register("productImg",{ required: true })} />
                        <Typography variant="h5">{errors.exampleRequired && <span>This field is required</span>}
                        </Typography>
                        <input placeholder="Enter Product Name" {...register("ProductName",{ required: true })} />
                        <input placeholder="Enter Description"  {...register("ProductDes",{ required: true })} />
                        <input  type="number" placeholder="Enter Price" {...register("ProductPrice",{ required: true })} />
                        <input type="number" placeholder="Enter Reating" {...register("ProductReating",{ required: true })} />
                        <button className="formbtn">Submit</button>
                    </form>
                     </Box>
                     </Box>
                   </Grid>
               </Grid>
           </Container>
        </Box>
    )
}

export default AddProduct


