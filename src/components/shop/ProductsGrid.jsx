import ItemCard from "../utilities/ItemCard";

const ProductsGrid = ({ loadedMenu, itemCategoryName }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                loadedMenu?.filter((item) => item.category === itemCategoryName).slice(0, 9).map(item => (
                    <ItemCard key={item.id} item={item} />
                ))
            }
        </div>
    );
};

export default ProductsGrid;