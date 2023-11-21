import slide1 from "../../assets/home/01.jpg"
import slide2 from "../../assets/home/02.jpg"
import slide3 from "../../assets/home/03.png"
import slide4 from "../../assets/home/04.jpg"
import slide5 from "../../assets/home/05.png"
import slide6 from "../../assets/home/06.png"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

const Banner = () => {
    return (


        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
            {
                images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))
            }
        </Carousel>

    );
};

export default Banner;
