import { CardMedia, Container, Grid,Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Rating from 'react-rating';
import { useParams } from 'react-router'
import Header from '../../../../Shared/Header/Header';
import './PurchaseItem.css'
import useAuth from '../../../../Hooks/useAuth';
import swal from 'sweetalert';



const PurchaseItem = () => {
    const {user} = useAuth();
    const oldValue ={email:user.email,userName:user.displayName,number:'',address:''}
    const [info,setInfo] = useState(oldValue);
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    const handleBlur = e=>{
        const find = e.target.name;
        const value = e.target.value;
        const newValue = {...info};
        newValue[find] = value;
        setInfo(newValue)
    }
    const handleUser = e => {
        e.preventDefault();
        const alluer ={
            ...info,
            product,
        }
       fetch('http://localhost:5000/oders',{
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(alluer)
       })
       .then(res=>res.json())
       .then(result=>{
           if(result.insertedId){
               popupAlert()
           }
       })

    };
    //   Alert js
const popupAlert = ()=>{
    swal({
        title: " Thank you!",
        text: "Successfully Buy the Product",
        icon: "success",
        button: "OK",
      });
}
// ====
    return (
        <div>
        <Header></Header>
         
           <Container sx={{my:3}}>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6}>
                        <Box>
                        <CardMedia
                            component='img'
                            image={product.productImg}
                        />
                        </Box>
                        <Box>
                        <Box sx={{display: 'flex',justifyContent:'space-around',alignItems: 'center'}}>
                        <Typography sx={{color:'#33ad7f',my:1}} variant="h3">
                            {product.ProductName}
                        </Typography>
                        <Rating
                            initialRating={product.ProductReating}
                            emptySymbol="far fa-star icon1"
                            fullSymbol="fas fa-star icon1"
                            readonly
                            />
                        </Box>
                        <Typography sx={{color:'#777'}} variant="subtitle1">
                            {product.ProductDes}
                        </Typography>
                       <Box sx={{display: 'flex',justifyContent:'space-around',alignItems: 'center'}}>
                       <Typography sx={{fontSize:'25px',color:'#33ad7f'}} variant="h6">
                           Price:
                        </Typography>
                        <Typography sx={{fontSize:'25px',color:'#33ad7f'}} variant="h6">
                           $ {product.ProductPrice}
                        </Typography>
                       </Box>
                        </Box>
                   </Grid>
                   <Grid item xs={12} md={6} >
                     <Box className="addProductForm" sx={{textAlign: 'center',display:'flex',justifyContent: 'center',boxShadow:3}}>
                     <Box>
                     <Typography sx={{fontWeight: '500',fontSize:"30px",color:"white"}} variant="h3">
                      Please Enter The Information
               </Typography>
                            <form onSubmit={handleUser}>
                                <input onBlur={handleBlur} name="email" type="eamil" defaultValue={user.email}/>
                                <input onBlur={handleBlur} name="userName" type="text" defaultValue={user.displayName}/>
                                <input onBlur={handleBlur} name="address" type="text" placeholder="Enter your address"/>
                                <input onBlur={handleBlur} name="number" type="number" placeholder="Enter your number"/>
                                <button type="submit" className="formbtn">Add To Cart</button>
                            </form>
                     </Box>
                     </Box>
                   </Grid>
               </Grid>
           </Container>
    
        </div>
    )
}

export default PurchaseItem

/* 

className="formbtn"
*/
