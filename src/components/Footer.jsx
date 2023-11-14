import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="mt-32">
            <div className="grid grid-cols-2">
                <address className="bg-gray-800 hover:bg-gray-700 text-white text-center p-28 not-italic leading-loose">
                    <h3 className="font-medium text-3xl mb-6">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </address>
                <address className="bg-gray-800 hover:bg-gray-700 text-white text-center p-28 not-italic leading-loose">
                    <h3 className="font-medium text-3xl mb-6">Follow US</h3>
                    <p>Join us on social media</p>
                    <div className="text-white flex gap-6 justify-center mt-5">
                        <FaInstagram className="text-4xl" />
                        <FaFacebookF className="text-4xl" />
                        <FaXTwitter className="text-4xl" />

                    </div>
                </address>
            </div>
            <div className="px-4 py-6 bg-gray-900 dark:bg-gray-800">
                <p className="text-sm text-gray-50 dark:text-gray-300 text-center">© 2023 <a href="/">Bistro Boss Restaurant</a>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;