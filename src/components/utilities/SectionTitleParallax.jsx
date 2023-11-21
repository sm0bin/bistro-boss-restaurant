
const SectionTitleParallax = ({ sectionTitle, sectionSubTitle, img }) => {
    return (
        <div className="p-16 md:p-16 lg:p-28 bg-cover bg-fixed mb-28" style={{ backgroundImage: `url(${img})` }}>
            <div className="px-8 md:px-12 py-8 md:py-12 lg:px-40 lg:py-24 bg-black/50 backdrop-blur text-white max-w-7xl mx-auto">
                <h2 className="font-serif font-bold mb-4 text-3xl md:text-5xl text-center">{sectionTitle}</h2>
                <p className="text-center text-base md:text-lg ">{sectionSubTitle}</p>
            </div>
        </div>
    );
};

export default SectionTitleParallax;