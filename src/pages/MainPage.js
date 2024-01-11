
import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import Banner from "../components/Banner"
import MySwiper from "../components/MySwiper";
import Footer from "../components/Footer";

function MainPage(){
    return(
        <div>
            <Navbar/>
            <Carousel/>
            <Cards/>
            <Banner/>
            <MySwiper/>
            <Footer/>
        </div>
    );
}
export default MainPage;