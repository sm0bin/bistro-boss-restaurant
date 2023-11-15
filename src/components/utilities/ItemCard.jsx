
const ItemCard = ({ item }) => {
    const { name, image, recipe } = item;
    return (
        <div className=" bg-[#F3F3F3] hover:bg-yellow-50 border rounded-md overflow-hidden border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{recipe}</p>
                <button className="bg-[#E8E8E8] px-6 py-2 rounded-lg border-b-4 border-gray-800 mt-6 mx-auto block hover:bg-gray-800 hover:text-yellow-400 hover:border-transparent capitalize text-base">add to cart</button>
            </div>
        </div>
    );
};

export default ItemCard;