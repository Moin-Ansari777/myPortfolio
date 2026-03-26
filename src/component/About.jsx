import React from 'react'

const About = () => {
    return (
        <section id='about' className="max-w-6xl bg-base-200 min-h-screen mx-auto px-4 py-16 font-sans">
            <div className="hero min-h-screen py-16">
            
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 text-center lg:text-left">
                    {/* Optional: Add an image here if needed */}
                    <div className="max-w-2xl">
                        <h2 className="text-black font-bold tracking-widest uppercase text-sm mb-2">About Me</h2>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                            I'm <span className="text-orange-600">Moin Ansari</span>
                        </h1>
                        
                        <div className="text-lg text-gray-600 leading-relaxed mb-8">
                            <p className="mb-4">
                                Hello! I’m <span className="font-semibold text-gray-800">Moin Ansari</span>, 
                                a Frontend Developer who loves Creativity."
                            </p>
                            <p>
                                I loves turning complex ideas into clean, interactive code. 
                                Whether it’s building a dynamic single-page application in <b>React</b> or 
                                maintaining robust server-side logic in <b>C#</b>, I enjoy the challenge 
                                of making the web both functional and beautiful.
                            </p>
                            <p className="mt-4">
                                When I’m not debugging JavaScript or styling with CSS, you can usually 
                                find me exploring new game worlds or leveling up my skills in the latest 
                                web frameworks. I believe in continuous learning and am ready to bring 
                                a fresh, dedicated perspective to a forward-thinking dev team.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 min-w-37.5">
                                <span className="text-orange-600 font-bold text-sm uppercase">Experience</span>
                                <span className="text-gray-800 font-medium">Fresher</span>
                            </div>
                            <div className="flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-orange-600 font-bold text-sm uppercase">Education</span>
                                <span className="text-gray-800 font-medium">BCA (Bachelor Of Computer Application)</span>
                            </div>
                        </div>

                        <button className="btn btn-warning mt-10 px-8">Get In Touch</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
