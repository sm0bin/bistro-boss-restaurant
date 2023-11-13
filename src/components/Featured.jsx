import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const Featured = () => {
    const [loadMenu, setLoadMenu] = useState([]);
    useEffect(() => {
        axios.get("menu.json").then((res) => {
            setLoadMenu(res.data);
        });
    }, []);
    return (
        <section>
            <SectionTitle heading="FROM OUR MENU" subheading="---Check it out---"></SectionTitle>
            <div className="grid grid-cols-2 gap-6">

                {
                    loadMenu?.slice(0, 6).map((item, index) => (
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

            <button className="px-8 py-4 rounded-lg border-b-4 border-gray-800 mt-14 mx-auto block hover:bg-gray-800 hover:text-white hover:border-transparent">View Full  Menu</button>

        </section>
    );
};

export default Featured;