import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Header from '../../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Flexibility from '../Flexibility/Flexibility';
import Products from '../Products/Products';
import ShowReviews from '../Review/ShowReviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <Flexibility></Flexibility>
            <Footer></Footer>
        </div>
    )
}

export default Home
