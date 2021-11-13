import {Box, Grid } from '@mui/material'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Switch,Route,useRouteMatch} from "react-router-dom";
import './Dashboard.css'
import ManageAllOders from '../ManageAllOders/ManageAllOders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../../Hooks/useAuth';
import BilPay from '../BilPay/BilPay';
import Review from '../Review/Review';
import MyOder from '../MyOder/MyOder';



const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const {logout,admin} = useAuth();
    const [dashboard,setDashboard] = useState(false);
    const handleIcon = ()=>{
        dashboard ?setDashboard(false):setDashboard(true);
        console.log(dashboard);
    }
    return (
        <>
        <Box style={{display:'flex',justifyContent: 'center'}}>
                <Box className={dashboard?"dashboard1":"dashboard"}>
                      <Box className="dashboard3" sx={{display:'flex',flexDirection: 'column',justifyContent: 'center',my:2,width:'100%'}}>
                      <NavLink to='/'>Home</NavLink>
                     {admin&& <Box  className="dashboard3" sx={{display:'flex',flexDirection: 'column',justifyContent: 'center',width:'100%'}}>
                      <NavLink activeClassName="active1" to={`${url}/makeAddmin`}>Make Admin</NavLink>
                      <NavLink activeClassName="active1" to={`${url}/manageAll`}>Manage All Orders</NavLink>
                      <NavLink activeClassName="active1" to={`${url}/addProduct`}>Add A Product</NavLink>
                      <NavLink activeClassName="active1" to={`${url}/manageProducts`}>Manage Products</NavLink>
                      </Box>}
                      {!admin&&<Box className="dashboard3" sx={{display:'flex',flexDirection: 'column',justifyContent: 'center',width:'100%'}}>
                      <NavLink activeClassName="active1" to={`${url}/payment`}>Payment</NavLink>
                      <NavLink activeClassName="active1" to={`${url}/review`}>Review</NavLink>
                      <NavLink activeClassName="active1" exact to={`${url}/myOder`}>MyOder</NavLink>
                      </Box>}
                      <NavLink className="all-btn2" onClick={logout} to='/login'>Logout</NavLink>
                      </Box>
                    </Box>
         
            <Box sx={{background:'#33ad7f',height:'40px',width:'100%'}}>
             <Box className="dashboardBars">
             {dashboard? <i  onClick={handleIcon} className="fas fa-bars"></i>: <i  onClick={handleIcon} className="fas fa-times"></i>}
             </Box>
                <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',textAlign: 'center'}}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <Switch>
                    <Route exact path={`${path}/makeAddmin`}>
                    <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route  path={`${path}/manageAll`}>
                     <ManageAllOders></ManageAllOders>
                    </Route>
                    <Route  path={`${path}/addProduct`}>
                     <AddProduct></AddProduct>
                    </Route>
                    <Route  path={`${path}/manageProducts`}>
                     <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/payment`}>
                     <BilPay></BilPay>
                    </Route>
                    <Route path={`${path}/review`}>
                     <Review></Review>
                    </Route>
                    <Route path={`${path}/myOder`}>
                     <MyOder></MyOder>
                    </Route>
                </Switch>
                </Grid>
            </Grid>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Dashboard




/* 




*/
