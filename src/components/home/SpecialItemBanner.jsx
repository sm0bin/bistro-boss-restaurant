
import featured from "../../assets/home/featured.jpg";
const SpecialItemBanner = () => {
    return (
        <section className="p-32 bg-fixed relative overflow-hidden">
            <div className="p-32 bg-fixed blur-md brightness-75 absolute -inset-8" style={{ backgroundImage: `url(${featured})` }}></div>
            {/* <div className="bg-black absolute inset-0 z-10"></div> */}
            <div className="relative top-0 left-0">

                <div className="flex flex-col items-center justify-center w-full mb-12">
                    <p className="w-full italic text-center text-xl mb-4 text-yellow-400 dark:text-gray-400 md:max-w-xl">
                        ---Check it out---
                    </p>
                    <h2 className="text-3xl border-y-4 px-12 py-5 tracking-tight text-center text-white dark:text-white md:text-4xl md:leading-none">
                        FROM OUR MENU
                    </h2>
                </div>
                <div className="flex items-center gap-16">

                    <img className="w-1/2" src={featured} alt="" />
                    <div className="text-white">
                        <h6 className="text-2xl mb-2 text-yellow-200">March 20, 2023</h6>
                        <h5 className="text-2xl mb-6 font-medium">WHERE CAN I GET SOME?</h5>
                        <p className="text-xl">Embark on a culinary journey with our Exclusive Special Menu, curated just for you. Indulge in a symphony of flavors and tantalize your taste buds with our chef&apos;s signature creations. From delectable appetizers to mouthwatering mains, each dish is a masterpiece. Elevate your dining experience and treat yourself to the extraordinary. Limited-time, unforgettable tastes await you at Bistro Boss Restaurant. Bon appétit!</p>
                        <button className="px-8 py-4 rounded-lg border-b-4 border-white text-white hover:text-black mt-6  hover:bg-white  hover:border-transparent uppercase">add to cart</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SpecialItemBanner;