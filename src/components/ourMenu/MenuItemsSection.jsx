import ButtonPrimary from "../utilities/ButtonPrimary";

// import img from "../../assets/menu/banner3.jpg"
const MenuItemsSection = ({ sectionTitle, sectionSubTitle, img, loadedMenu, itemCategoryName }) => {

    // const categoryItems = loadedMenu?.filter((item) => item.category === itemCategoryName);

    return (
        <section className="mb-16">
            <div className="p-28 bg-cover bg-fixed" style={{ backgroundImage: `url(${img})` }}>
                <div className="px-40 py-24 bg-black/50 backdrop-blur text-white max-w-7xl mx-auto">
                    <h2 className="font-serif font-bold mb-4 text-5xl text-center">{sectionTitle}</h2>
                    <p className="text-center text-lg ">{sectionSubTitle}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-14 max-w-7xl mx-5 md:mx-8 lg:mx-auto mt-28">

                {
                    loadedMenu?.filter((item) => item.category === itemCategoryName).slice(0, 6).map((item, index) => (
                        <div className="flex gap-6" key={index}>
                            <img className="rounded-b-full rounded-tr-full w-28 h-20 object-cover" src={item.image} alt="" />
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="font-serif text-xl">{item.name} ---------------</h3>
                                    <p className="text-xl text-yellow-500">${item.price}</p>
                                </div>
                                <p className="text-gray-600">{item.recipe}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <ButtonPrimary btnText="ORDER YOUR FAVORITE FOOD" />

        </section>
    );
};

export default MenuItemsSection;