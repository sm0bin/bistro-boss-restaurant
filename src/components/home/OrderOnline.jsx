import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from '../utilities/SectionTitle';

const OrderOnline = () => {
    return (
        <div>
            <SectionTitle heading="ORDER ONLINE" subheading="---From 11:00am to 10:00pm---"></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='w-full object-cover' src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full object-cover' src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full object-cover' src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full object-cover' src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full object-cover' src={slide5} alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OrderOnline;