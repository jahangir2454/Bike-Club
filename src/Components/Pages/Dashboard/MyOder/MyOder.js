import { Container,Box, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const pendingOder={
    border:'none',
    outline:'none',
    background:'none',
    background:'#48cae4',
    padding:'10px',
    borderRadius:'50px',
    color:'#fff',
}
const myoder = {
    background:'#fff',
    width:'100%',
    minHeight:'300px'
};
const deletIcond = {
    border:'none',
    background:'none',
    outline:'none',
    fontSize:'20px',
}

const MyOder = () => {
    const {user} = useAuth()
    const [oder,setOder] = useState([]);
    const [isLoad,setIsLoad] = useState(false)
    useEffect(() => {
        fetch(`https://boiling-harbor-34572.herokuapp.com/myOder/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setOder(data)
        })
    },[isLoad]);
    console.log(oder)
    const handledelet = id=>{
        const sure = window.confirm('Are you sure you want to delete this')
        if(sure){
            fetch(`https://boiling-harbor-34572.herokuapp.com/myOder/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('deleted successfully')
                setIsLoad(true)
            }
        })
        }
    }
    
    return (
        <div>
           <Container>
               <Box sx={{my:2}} style={ myoder}>
                    <Typography variant="h3" sx={{color:'#33ad7f',fontWeight:'500',fontSize:'25px',py:2}}>
                    Add your All New Oders : {oder.length}
                    </Typography>
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}}>Index</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="left">Date</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="left">Oder</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="left">Product View</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="left">Price</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="left">Status</TableCell>
            <TableCell sx={{color:'#33ad7f',fontSize:'18px'}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {oder.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               # {index}
              </TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row?.product?.data?.ProductName}</TableCell>
              <TableCell align="left">
                  <CardMedia
                      component="img"
                      image={row?.product?.data?.productImg}
                      style={{height:'40px',width:'40px',borderRadius:'50px'}}
                  />
              </TableCell>
              <TableCell align="left">$ {row?.product?.data?.ProductPrice}</TableCell>
              <TableCell align="left">
                <button  style={pendingOder}>{row?.status}</button>
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
               </Box>
           </Container>
        </div>
    )
}

export default MyOder;
