import SectionTitle from "./SectionTitle";
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";
import quote from "../assets/icon/quote-left.svg"

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Testimonials = () => {
    const [loadTestimonial, setLoadTestimonial] = useState([]);
    axios.get("reviews.json").then((res) => {
        setLoadTestimonial(res.data);
    });


    const customStyles = {
        itemShapes: RoundedStar,
        activeFillColor: '#eab308',
        inactiveFillColor: '#9ca3af',
    };

    return (
        <div>
            <SectionTitle heading="TESTIMONIALS" subheading="---What Our Clients Say---"></SectionTitle>

            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    loadTestimonial?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-center px-28">
                                <Rating
                                    className="mx-auto mb-12"
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                    itemStyles={customStyles}
                                    readOnly
                                />
                                <img className="mx-auto mb-10" src={quote} alt="" />
                                <p className="text-xl mb-4 text-gray-600">{item.details}</p>
                                <h3 className="font-medium text-3xl text-yellow-500">{item.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export default Testimonials;