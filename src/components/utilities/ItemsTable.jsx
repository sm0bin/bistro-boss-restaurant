
const ItemsTable = ({ loadedMenu, itemCategoryName }) => {
    return (
        <div className="grid grid-cols-2 gap-10 mb-14 max-w-7xl mx-5 md:mx-8 lg:mx-auto">

            {
                loadedMenu?.filter((item) => item.category === itemCategoryName).slice(0, 6).map(item => (
                    <div className="flex gap-6" key={item._id}>
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
    );
};

export default ItemsTable;