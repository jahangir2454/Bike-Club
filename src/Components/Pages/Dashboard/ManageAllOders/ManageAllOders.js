import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { Box } from '@mui/system';



const deletIcond = {
    border:'none',
    background:'none',
    outline:'none',
    fontSize:'20px',
}

const ManageAllOders = () => {
    const [oder,setOders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageOder')
        .then(res=>res.json())
        .then(data=>{
            setOders(data)
        })
    },[]);
    const handledelet = id =>{
       
    };
    return (
        <div>
            <h3>this is manage all oders: {oder.length}</h3>
            <Container>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Index</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Oders</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Approved</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {oder.map((row,index) => (
                            <TableRow 
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                            <TableCell component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.userName}
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">fgh</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">
                            <TableCell align="right">
                            <Box>
                            <button sx={{color:'#33ad7f'}} style={deletIcond}>
                            <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button onClick={()=>handledelet(row._id)} style={deletIcond}>
                            <i class="fas fa-trash-alt"></i>
                            </button>
                            </Box>
                        </TableCell>
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

export default ManageAllOders;
