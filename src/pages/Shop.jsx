import PageBanner from "../components/utilities/PageBanner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import img from "../assets/title/banner-shop.jpg"
import ProductsTabs from "../components/shop/ProductsTabs";

const Shop = () => {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <title>Bistro Boss Restaurant | Shop</title>
                </Helmet>
                <PageBanner pageTitle="OUR SHOP" img={img} />
                <ProductsTabs></ProductsTabs>

            </>
        </HelmetProvider>
    );
};

export default Shop;