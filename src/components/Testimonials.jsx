import SectionTitle from "./SectionTitle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import axios from "axios";

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [loadTestimonial, setLoadTestimonial] = useState([]);
    axios.get("reviews.json").then((res) => {
        setLoadTestimonial(res.data);
    });

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
                            <div className="bg-white rounded-lg shadow-lg py-6">
                                <div className="flex justify-center items-center mt-4">
                                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{item.name}</h3>
                                </div>
                                <div className="flex justify-center items-center mt-2">
                                    <p className="text-gray-500 dark:text-gray-300 text-center">{item.details}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export default Testimonials;