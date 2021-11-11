import { CardMedia, Container,Box } from '@mui/material'
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
import swal from 'sweetalert';


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
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
           
        })
    },[load]);
   
    const handledelet = id =>{
        const alertpop = window.confirm('Are you sure you want to delete')
       if(alertpop){
        fetch(`http://localhost:5000/deleteAll/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                  setLoad(true)
            }
        })
       }
    };
   /*  const popupAlert = ()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    } */
    
    return (
        <div>
           <Container>
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
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index}
                        </TableCell>
                        <TableCell  component="th" scope="row">
                           <CardMedia
                               component="img"
                               style={{width:'30px',height:'30px',borderRadius:'50%'}}
                               image={row.productImg}
                           />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.ProductName}
                        </TableCell>
                        <TableCell align="right">$ {row.ProductPrice}</TableCell>
                        <TableCell align="right">{row.ProductPrice}</TableCell>
                        <TableCell align="right">
                            <Link style={ viewdateils } to={`/purchase/${row._id}`}>View Details</Link>
                        </TableCell>
                        <TableCell align="right">
                            <Box>
                            <button sx={{color:'#33ad7f'}} style={deletIcond}>
                            <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button onClick={()=>handledelet(row._id)} sx={{color:'',mx:2}} style={deletIcond}>
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
