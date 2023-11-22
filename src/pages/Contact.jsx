import PageBanner from "../components/utilities/PageBanner";
import { Helmet } from 'react-helmet-async';
import img from "../assets/title/banner-contact.jpg"
import SectionTitle from "../components/utilities/SectionTitle";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

const contacts = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 9876543210"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "123, Main Street, Your City"
    },
    {
        icon: <FaClock />,
        title: "Opening Hours",
        description: "Mon - Fri: 08:00 - 22:00"
    }
]

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss Restaurant | Contact</title>
            </Helmet>

            <div className="space-y-32">
                <PageBanner pageTitle="CONTACT US" img={img} />
                <section>
                    <SectionTitle heading="OUR LOCATION" subheading="---Visit Us---"></SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            contacts.map((item, index) => (
                                <div key={index}>
                                    <div className="bg-yellow-500 text-black w-full rounded-lg text-3xl py-4 flex justify-center">{item.icon}</div>
                                    <div className="text-center py-10 bg-gray-200 rounded-b-lg mx-10">
                                        <h4 className="text-2xl mb-4 uppercase font-medium">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </section>
                <section>
                    <SectionTitle heading="CONTACT FORM" subheading="---Send Us a Message---"></SectionTitle>

                    <div className="card w-full bg-gray-100">
                        <form className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="phone" placeholder="Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="subject" placeholder="Subject" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered textarea-lg min-h-[20rem]" placeholder="Write your message here"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Send Message <FaTelegramPlane /></button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;