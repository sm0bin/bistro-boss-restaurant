import { useState } from "react";
import SectionTitle from "../utilities/SectionTitle";
import axios from "axios";

const Recommended = () => {
    const [loadedMenu, setLoadedMenu] = useState([]);
    axios.get("menu.json").then(res => setLoadedMenu(res.data))
    return (
        <div>
            <SectionTitle heading="CHEF RECOMMENDS" subheading="---Should Try---"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    loadedMenu?.slice(0, 3).map(item => (


                        <div key={item._id} className=" bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{item.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{item.recipe}</p>
                                <button className="px-8 py-4 rounded-lg border-b-4 border-gray-800 mt-6 mx-auto block hover:bg-gray-800 hover:text-white hover:border-transparent uppercase">add to cart</button>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    );
};

export default Recommended;