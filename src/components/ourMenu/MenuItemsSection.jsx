import ButtonPrimary from "../utilities/ButtonPrimary";
import ItemsTable from "../utilities/ItemsTable";
import SectionTitleParallax from "../utilities/SectionTitleParallax";

const MenuItemsSection = ({ sectionTitle, sectionSubTitle, img, loadedMenu, itemCategoryName }) => {

    // const categoryItems = loadedMenu?.filter((item) => item.category === itemCategoryName);

    return (
        <section className="mb-16">

            <SectionTitleParallax sectionTitle={sectionTitle} sectionSubTitle={sectionSubTitle} img={img} />
            <ItemsTable loadedMenu={loadedMenu} itemCategoryName={itemCategoryName} />
            <ButtonPrimary btnText="ORDER YOUR FAVORITE FOOD" />

        </section>
    );
};

export default MenuItemsSection;