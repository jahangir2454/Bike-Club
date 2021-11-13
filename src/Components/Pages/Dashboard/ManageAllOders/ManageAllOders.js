import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { Box, padding } from '@mui/system';
import { Link } from 'react-router-dom';


const viewdateilss ={
    border:'none',
    outline:'none',
    textDecoration:'none',
    background:'#33ad7f',
    color:'#fff',
    fontSize:'14px',
    padding:'10px',
    borderRadius:'50px',
    cursor:'pointer',
}

const pendingOder={
    border:'none',
    outline:'none',
    background:'none',
    background:'#48cae4',
    padding:'10px',
    borderRadius:'50px',
    color:'#fff',
}

const deletIcond = {
    border:'none',
    background:'none',
    outline:'none',
    fontSize:'20px',
}

const ManageAllOders = () => {
    const [load,setLoad] = useState(false)
    const [oder,setOders] = useState([]);
    useEffect(() => {
        fetch('https://boiling-harbor-34572.herokuapp.com/manageOder')
        .then(res=>res.json())
        .then(data=>{
            setOders(data)
        })
    },[load]);
    const handledelet = id =>{
      const sure =window.confirm('Are you sure you want to delete this item');
      if(sure){
        fetch(`https://boiling-harbor-34572.herokuapp.com/manageOder/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount)
         setLoad(true)
        })
      }
    };
    const handleAp = item => {
       fetch(`https://boiling-harbor-34572.herokuapp.com/manageOder/${item}`,{
           method: 'PUT',
       })
       .then(res=>res.json())
       .then(data=>{
           if(data?.modifiedCount){
               alert('successfully update')
            setLoad(true)
           } 
       })
    };
    console.log(oder,'alloder')
    return (
        <div>
            <h3  style={{color:'#33ad7f'}}>Total Oders: {oder.length}</h3>
            <Container>
             <Box sx={{justifyContent: 'center',alignItems: 'center',display:'flex'}}>
             <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{color:'#33ad7f'}}>Index</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="left">Date</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="left">Email</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="left">Oders</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="left">Status</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="left">Approved</TableCell>
                            <TableCell sx={{color:'#33ad7f'}} align="right">Action</TableCell>
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
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row?.product?.data?.ProductName}</TableCell>
                            <TableCell align="right">
                                <button  style={pendingOder}>{row?.status}</button>
                            </TableCell>
                            <TableCell >
                                <button onClick={() =>handleAp(row._id)}  style={ viewdateilss }>
                                Approved
                                </button>
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

export default ManageAllOders;






