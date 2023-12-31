import { useLoaderData } from "react-router-dom";
import PageBanner from "../components/utilities/PageBanner";
import MenuItemsSection from "../components/menu/MenuItemsSection";
import dessert from "../assets/menu/dessert-bg.jpeg";
import salad from "../assets/menu/salad-bg.jpg";
import pizza from "../assets/menu/pizza-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
import { Helmet } from 'react-helmet-async';
import SectionTitle from "../components/utilities/SectionTitle";
import ItemsTable from "../components/utilities/ItemsTable";
import ButtonPrimary from "../components/utilities/ButtonPrimary";
import img from "../assets/title/banner-menu.jpg"

const Menu = () => {
    const loadedMenu = useLoaderData();
    return (
        <div className="space-y-20">
            <Helmet>
                <title>Bistro Boss Restaurant | Menu</title>
            </Helmet>
            <PageBanner pageTitle="OUR MENU" img={img}></PageBanner>
            <div className="my-32">
                <SectionTitle heading="TODAY'S OFFER" subheading="---Don't miss---"></SectionTitle>
                <ItemsTable loadedMenu={loadedMenu} itemCategoryName="offered"></ItemsTable>
                <ButtonPrimary btnText="ORDER YOUR FAVORITE FOOD" />
            </div>
            <MenuItemsSection
                sectionTitle="Dessert Delights" img={dessert} loadedMenu={loadedMenu} itemCategoryName="dessert"
                sectionSubTitle="Satisfy your sweet cravings with our exquisite Dessert Collection, a temptation that transcends time. Indulge in decadent creations crafted with passion, ensuring every bite is a journey through flavors that stand the test of centuries."
            ></MenuItemsSection>
            <MenuItemsSection
                sectionTitle="Salad Sensations" img={salad} loadedMenu={loadedMenu} itemCategoryName="salad"
                sectionSubTitle="Satisfy your sweet cravings with our exquisite Dessert Collection, a temptation that transcends time. Indulge in decadent creations crafted with passion, ensuring every bite is a journey through flavors that stand the test of centuries."
            ></MenuItemsSection>
            <MenuItemsSection
                sectionTitle="Pizza Perfection" img={pizza} loadedMenu={loadedMenu} itemCategoryName="pizza"
                sectionSubTitle="Satisfy your sweet cravings with our exquisite Dessert Collection, a temptation that transcends time. Indulge in decadent creations crafted with passion, ensuring every bite is a journey through flavors that stand the test of centuries."
            ></MenuItemsSection>
            <MenuItemsSection
                sectionTitle="Soulful Soups" img={soup} loadedMenu={loadedMenu} itemCategoryName="soup"
                sectionSubTitle="Satisfy your sweet cravings with our exquisite Dessert Collection, a temptation that transcends time. Indulge in decadent creations crafted with passion, ensuring every bite is a journey through flavors that stand the test of centuries."
            ></MenuItemsSection>

        </div>
    );
};

export default Menu;