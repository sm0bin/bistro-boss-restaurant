import PageBanner from "../components/utilities/PageBanner";
import { Helmet } from 'react-helmet-async';
import img from "../assets/title/banner-shop.jpg"
import ProductsTabs from "../components/shop/ProductsTabs";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    const loadedMenu = useLoaderData();
    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Shop</title>
            </Helmet>
            <PageBanner pageTitle="OUR SHOP" img={img} />
            {
                loadedMenu.length > 0 ?
                    <ProductsTabs loadedMenu={loadedMenu}></ProductsTabs>
                    : <h1>Loading</h1>
            }

        </>
    );
};

export default Shop;