
import "flowbite/dist/flowbite.min.js";
import ProductsGrid from "./ProductsGrid";
const ProductsTabs = ({ loadedMenu }) => {
    console.log(loadedMenu);
    return (
        <section className="max-w-7xl mx-5 md:mx-8 lg:mx-auto mt-32">


            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li className="me-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg uppercase" id="salads-tab" data-tabs-target="#salads" type="button" role="tab" aria-controls="salads" aria-selected="false">Salad</button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="pizza-tab" data-tabs-target="#pizza" type="button" role="tab" aria-controls="pizza" aria-selected="false">pizza</button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="soups-tab" data-tabs-target="#soups" type="button" role="tab" aria-controls="soups" aria-selected="false">soups</button>
                    </li>
                    <li role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="desserts-tab" data-tabs-target="#desserts" type="button" role="tab" aria-controls="desserts" aria-selected="false">desserts</button>
                    </li>
                    <li role="presentation">
                        <button className="inline-block p-4 border-b-2 rounded-t-lg uppercase hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="drinks-tab" data-tabs-target="#drinks" type="button" role="tab" aria-controls="drinks" aria-selected="false">drinks</button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="salads" role="tabpanel" aria-labelledby="salads-tab">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="salad" />
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="pizza" role="tabpanel" aria-labelledby="pizza-tab">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="pizza" />
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="soups" role="tabpanel" aria-labelledby="soups-tab">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="soup" />
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="dessert" />
                </div>
                <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
                    <ProductsGrid loadedMenu={loadedMenu} itemCategoryName="drinks" />
                </div>
            </div>

        </section>
    );
};

export default ProductsTabs;