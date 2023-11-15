import { useEffect, useState } from "react";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";
import ButtonPrimary from "../utilities/ButtonPrimary";
import ItemsTable from "../utilities/ItemsTable";

const Featured = () => {
    const [loadedMenu, setLoadedMenu] = useState([]);
    useEffect(() => {
        axios.get("menu.json").then((res) => {
            setLoadedMenu(res.data);
        });
    }, []);
    return (
        <section>
            <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---"></SectionTitle>
            <ItemsTable loadedMenu={loadedMenu} itemCategoryName="popular" />
            <ButtonPrimary btnText="View Full  Menu" />
        </section>
    );
};

export default Featured;