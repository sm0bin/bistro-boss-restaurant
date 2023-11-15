import Carousel from "../components/home/Carousel";
import Featured from "../components/home/Featured";
import MarketingBanner from "../components/home/MarketingBanner";
import OrderOnline from "../components/home/OrderOnline";
import Recommended from "../components/home/Recommended";
import SpecialItemBanner from "../components/home/SpecialItemBanner";
import Testimonials from "../components/home/Testimonials";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
            <div className="space-y-24">
                <Helmet>
                    <title>Bistro Boss Restaurant | Home</title>
                </Helmet>
                <Carousel></Carousel>
                <div className="max-w-7xl mx-5 md:mx-8 lg:mx-auto space-y-24">
                    <OrderOnline></OrderOnline>
                    <MarketingBanner></MarketingBanner>
                    <Featured></Featured>
                    <h1 className="font-semibold font-serif text-center bg-gray-800 text-white text-5xl py-24">Call Us: +88 0192345678910</h1>
                    <Recommended></Recommended>
                </div>
                <SpecialItemBanner></SpecialItemBanner>
                <div className="max-w-7xl mx-5 md:mx-8 lg:mx-auto space-y-24">
                    <Testimonials></Testimonials>
                </div>

            </div>
        </HelmetProvider>
    );
};

export default Home;