import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import data from '../Data/data.json'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const { basics } = { ...data }

    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
            import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        )
            .then(() => {
                alert("Email Sent Succesfull");
                formRef.current.reset();
                isSending(false);
            },
                (error) => {
                    alert("Failed to Send Email")
                    console.log(error)
                    setIsSending(false);
                }
            )

    }

    return (
        <section id='contact' className="bg-base-200 max-w-6xl m-auto min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Get In <span className="text-orange-600">Touch</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        I Always Ready To Start Something Different & Unique
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Contact Information */}
                    <div className="space-y-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-orange-600 mb-6">Contact Information</h3>

                            <div className="space-y-6 ">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full hover:bg-orange-600 hover:text-white flex items-center justify-center text-xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                                        <p className="text-gray-800 font-medium">{basics.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full hover:bg-orange-600 hover:text-white flex items-center justify-center text-xl">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase font-bold">Location</p>
                                        <p className="text-gray-800 font-medium">{basics.location.city}{basics.location.region}</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-8 border-gray-100" />

                            <h4 className="text-gray-800 font-bold mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://www.linkedin.com/in/moin-ansari-a61244374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                                    className="btn btn-circle btn-outline btn-info hover:text-white">
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href="https://github.com/Moin-Ansari777"
                                    className="btn btn-circle btn-outline btn-neutral hover:text-white">
                                    <FaGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Right Side: Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder={basics.name}
                                    className="input input-bordered focus:border-blue-600 focus:outline-none w-full bg-gray-50"
                                    required
                                />
                            </div>
                            {/* formControl */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='from_email'
                                    placeholder="Your Email"
                                    className="input input-bordered focus:border-blue-600 focus:outline-none w-full bg-gray-50"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    name='subject'
                                    placeholder="subject"
                                    className="input input-bordered focus:border-blue-600 focus:outline-none w-full bg-gray-50"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Message</span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered focus:border-blue-600 focus:outline-none h-32 w-full bg-gray-50"
                                    placeholder="Write Your Response Here"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn bg-orange-600 w-full text-white font-bold tracking-wide">
                                {isSending ? "Sending" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
