import React from "react";
import Header from "../components/Header/header"
import Carousel from "../components/Carousel/carousel";
import FitnessServices from "../components/Services/CoursCo&SGT";
import Footer from "../components/Footer/footer";
import Services from "../components/Services/CoachingPerso";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Services />
            <FitnessServices />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;