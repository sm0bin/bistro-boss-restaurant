import { useEffect, useState } from "react";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";
import ButtonPrimary from "../utilities/ButtonPrimary";

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
            <div className="grid grid-cols-2 gap-6 mb-14">

                {
                    loadedMenu?.filter((item) => item.category === "popular").slice(0, 6).map((item, index) => (
                        <div className="flex gap-6" key={index}>
                            <img className="rounded-b-full rounded-tr-full w-28" src={item.image} alt="" />
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-serif text-xl">{item.name} ------------------</h3>
                                    <p className="text-xl text-yellow-500">${item.price}</p>
                                </div>
                                <p className="text-gray-600">{item.recipe}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <ButtonPrimary btnText="View Full  Menu" />

        </section>
    );
};

export default Featured;