

const PageBanner = ({ pageTitle, img }) => {
    return (
        <div className="p-16 md:p-16 lg:p-28 pt-28 md:pt-40 lg:pt-52 bg-cover bg-fixed w-full" style={{ backgroundImage: `url(${img})` }}>
            <div className="px-8 md:px-12 lg:px-40 py-8 md:py-12 lg:py-24 bg-black/50 backdrop-blur text-white max-w-7xl mx-8 md:mx-12 lg:mx-auto">
                <h2 className="font-serif font-bold mb-2  text-4xl lg:text-8xl text-center">{pageTitle}</h2>
                <p className="text-center  text-xl lg:text-2xl font-serif font-semibold">Would you like to try a dish?</p>
            </div>
        </div>
    );
};

export default PageBanner;