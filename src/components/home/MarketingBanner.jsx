
import img from "../../assets/home/chef-service.jpg"
const MarketingBanner = () => {
    return (
        <div className="p-28 " style={{ backgroundImage: `url(${img})` }}>
            <div className="px-40 py-24 bg-white">
                <h2 className="font-serif mb-2 text-5xl text-center">Bistro Boss</h2>
                <p className="text-center">Indulge in the art of flavor at Bistro Boss, where every dish is a masterpiece. Savor the fusion of culinary expertise and passion on every plate. From our exquisite signature dishes to the warm ambiance, we invite you to a dining experience that&apos;s beyond extraordinary. Elevate your palate with us at Bistro Boss - where every meal tells a story of taste and excellence.</p>
            </div>
        </div>
    );
};

export default MarketingBanner;