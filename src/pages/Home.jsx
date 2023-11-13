import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import MarketingBanner from "../components/MarketingBanner";
import OrderOnline from "../components/OrderOnline";

const Home = () => {
    return (
        <div className="space-y-24">

            <Carousel></Carousel>
            <div className="max-w-7xl mx-5 md:mx-8 lg:mx-auto space-y-24">
                <OrderOnline></OrderOnline>
                <MarketingBanner></MarketingBanner>
                <Featured></Featured>
                <h1 className="font-semibold font-serif text-center bg-gray-800 text-white text-5xl py-24">Call Us: +88 0192345678910</h1>
            </div>

        </div>
    );
};

export default Home;