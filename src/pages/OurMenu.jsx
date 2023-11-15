import { useLoaderData } from "react-router-dom";
import PageBanner from "../components/ourMenu/PageBanner";
import MenuItemsSection from "../components/ourMenu/MenuItemsSection";
import dessert from "../assets/menu/dessert-bg.jpeg";
import salad from "../assets/menu/salad-bg.jpg";
import pizza from "../assets/menu/pizza-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet";

const OurMenu = () => {
    const loadedMenu = useLoaderData();
    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Menu</title>
            </Helmet>
            <PageBanner></PageBanner>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt asperiores similique voluptates minus ratione fugiat magni odio. Totam, natus.</p>
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

        </>
    );
};

export default OurMenu;