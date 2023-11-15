
const SectionTitleParallax = ({ sectionTitle, sectionSubTitle, img }) => {
    return (
        <div className="p-28 bg-cover bg-fixed mb-28" style={{ backgroundImage: `url(${img})` }}>
            <div className="px-40 py-24 bg-black/50 backdrop-blur text-white max-w-7xl mx-auto">
                <h2 className="font-serif font-bold mb-4 text-5xl text-center">{sectionTitle}</h2>
                <p className="text-center text-lg ">{sectionSubTitle}</p>
            </div>
        </div>
    );
};

export default SectionTitleParallax;