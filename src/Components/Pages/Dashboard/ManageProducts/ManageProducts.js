import { CardMedia, Container,Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './ManageProducts.css';




const viewdateils ={
    textDecoration:'none',
    background:'#33ad7f',
    color:'#fff',
    fontSize:'14px',
    padding:'10px',
    borderRadius:'50px'
}
const deletIcond = {
    border:'none',
    background:'none',
    outline:'none',
    fontSize:'20px',
}
const ManageProducts = () => {
    const [products,setProducts] = useState([]);
    const [load,setLoad] = useState(false);
    useEffect(() =>{
        fetch('https://boiling-harbor-34572.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
           
        })
    },[load]);
// =======================   delete data
    const handledelet = (id,method) =>{
        const alertpop = window.confirm('Are you sure you want to delete')
       if(alertpop){
        fetch(`https://boiling-harbor-34572.herokuapp.com/deleteAll/${id}`,{
            method:method,
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                  setLoad(true)
            }
        })
       }
    };
    //============================= uapdate get data
   
 console.log(products?.time)
 console.log(products)
  

    
    return (
        <div>
           <Container>
           <Typography sx={{color:'#33ad7f',fontSize:'25px',my:2}} variant='h3'>All Product : {products.length}</Typography>
           <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell sx={{color:'#33ad7f'}}>index</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="left">Product View</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="left">Product Name</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="right">Price</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="right">Date</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="center">View Details</TableCell>
                        <TableCell sx={{color:'#33ad7f'}} align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((row,index) => (
                        <TableRow
                        key={row?.data?._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index}
                        </TableCell>
                        <TableCell  component="th" scope="row">
                           <CardMedia
                               component="img"
                               style={{width:'30px',height:'30px',borderRadius:'50%'}}
                               image={row?.data?.productImg}
                           />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row?.data?.ProductName}
                        </TableCell>
                        <TableCell align="right">$ {row?.data?.ProductPrice}</TableCell>
                        <TableCell align="right">{row.tiem}</TableCell>
                        <TableCell align="right">
                            <Link style={ viewdateils } to={`/purchase/${row._id}`}>View Details</Link>
                        </TableCell>
                        <TableCell align="right">
                            <Box>
                            <button sx={{color:'#33ad7f'}} style={deletIcond}>
                            <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button onClick={()=>handledelet(row._id,"DELETE")} sx={{color:'',mx:2}} style={deletIcond}>
                            <i class="fas fa-trash-alt"></i>
                            </button>
                            </Box>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
           </Container>
        </div>
    )
}

export default ManageProducts
