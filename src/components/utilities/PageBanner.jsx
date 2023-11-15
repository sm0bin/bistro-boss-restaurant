

const PageBanner = ({ pageTitle, img }) => {
    return (
        <div className="p-28 pt-52 bg-cover bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="px-40 py-24 bg-black/50 backdrop-blur text-white max-w-7xl mx-auto">
                <h2 className="font-serif font-bold mb-2 text-8xl text-center">{pageTitle}</h2>
                <p className="text-center text-2xl font-serif font-semibold">Would you like to try a dish?</p>
            </div>
        </div>
    );
};

export default PageBanner;