import PageBanner from "../components/utilities/PageBanner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import img from "../assets/title/banner-contact.jpg"

const Contact = () => {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <title>Bistro Boss Restaurant | Contact</title>
                </Helmet>
                <PageBanner pageTitle="CONTACT US" img={img} />

            </>
        </HelmetProvider>
    );
};

export default Contact;