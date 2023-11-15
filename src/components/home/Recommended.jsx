import { useEffect, useState } from "react";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";
import ItemCard from "../utilities/ItemCard";

const Recommended = () => {
    const [loadedMenu, setLoadedMenu] = useState([]);
    useEffect(() => {
        axios.get("menu.json").then(res => setLoadedMenu(res.data))
    }, [])
    return (
        <div>
            <SectionTitle heading="CHEF RECOMMENDS" subheading="---Should Try---"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedMenu?.slice(0, 3).map(item => (
                        <ItemCard key={item._id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Recommended;