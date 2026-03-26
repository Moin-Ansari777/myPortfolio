import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import data from '../Data/data.json'

export default function Hero() {
    const { basics } = { ...data }
    return (
        <section id='home' className="max-w-6xl bg-base-200 min-h-screen mx-auto px-6 py-16 font-sans flex items-center">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                {/* Responsive Large Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                        alt="Moin - Frontend Developer"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        I am
                        <span className='text-orange-600 px-2'> {basics.name}</span>
                        <br />
                        <span className="text-4xl lg:text-5xl opacity-90">{basics.position}</span>
                    </h1>
                    <p className="py-6 text-xl opacity-80">
                        Frontend Fresher Looking For a Job. Specializing in building modern, responsive web applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="tooltip" data-tip="Let's Talk!">
                            <button className="btn btn-lg bg-orange-600 hover:bg-orange-700 text-white font-bold border-none px-8">
                                Hire Me!
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">

                            <a
                                href="https://www.linkedin.com/in/moin-ansari-a61244374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank" rel="noreferrer" className="btn btn-circle btn-outline btn-info hover:bg-info hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-outline btn-neutral hover:bg-neutral hover:text-white">
                                <FaGithub size={24} />
                            </a>

                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-outline btn-primary hover:bg-primary hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn btn-circle btn-outline btn-info hover:bg-info hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
