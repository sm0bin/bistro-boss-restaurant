
// import "flowbite/dist/flowbite.min.js";
import { Fragment, useState } from "react";
import ProductsGrid from "./ProductsGrid";
const ProductsTabs = ({ loadedMenu }) => {
    const [activeTab, setActiveTab] = useState(0);
    console.log(loadedMenu);
    // const categoryList = [{ label: 'Tab 1', categoryName: 'salad' }, { label: 'Tab 2', categoryName: 'pizza' }, { label: 'Tab 3', categoryName: 'soup' }, { label: 'Tab 4', categoryName: 'dessert' }, { label: 'Tab 5', categoryName: 'drinks' }];
    const categoryList = ["salad", "pizza", "soup", "dessert", "drinks"]

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    }
    return (
        <section className="max-w-7xl mx-5 md:mx-8 lg:mx-auto mt-32">


            <div role="tablist" className="tabs">

                {
                    categoryList.map((category, index) => (
                        <Fragment key={index}>
                            < input type="radio" name="my_tabs_1" role="tab" className={`tab w-max uppercase ${activeTab === index ? 'text-yellow-500 border-b-2' : ''}`}
                                aria-label={category}
                                checked={activeTab === index}
                                onChange={() => handleTabChange(index)} />
                            <div role="tabpanel" className="tab-content pt-10">
                                <ProductsGrid loadedMenu={loadedMenu} itemCategoryName={category} />
                            </div>
                        </Fragment>
                    ))
                }
                {/* <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" checked />
                <div role="tabpanel" className="tab-content p-10">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="salad" />
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 2" />
                <div role="tabpanel" className="tab-content p-10">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="pizza" />
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content p-10">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="soup" />
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content p-10">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="dessert" />
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content p-10">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="drinks" />
                </div> */}
            </div>

        </section >
    );
};

export default ProductsTabs;