import { useState } from "react";
import SectionTitle from "./SectionTitle";
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
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.recipe}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    );
};

export default Recommended;