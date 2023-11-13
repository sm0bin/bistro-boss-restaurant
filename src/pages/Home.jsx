import Carousel from "../components/Carousel";
import OrderOnline from "../components/OrderOnline";

const Home = () => {
    return (
        <div className="space-y-24">

            <Carousel></Carousel>
            <div className="max-w-7xl mx-5 md:mx-8 lg:mx-auto space-y-24">
                <OrderOnline></OrderOnline>

            </div>

        </div>
    );
};

export default Home;