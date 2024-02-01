import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="mt-0">
            <div className="container">
                <h2 data-aos="fade-down" data-aos-duration="1500"
                    className="pt-0 text-hOneColor flex items-center justify-center
                               text-[2.5rem] font-[700] mt-30 mb-4">
                    Reach Out
                </h2>
                <div className="flex flex-col lg:flex-row
                                items-center justify-evenly
                                px-4 lg:px-0
                                grow relative">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title="google-maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107501.
                          79193554953!2d30.911031253922303!3d-29.86859710842092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                          1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza
                          !4v1681380767080!5m2!1sen!2sza"
                                className="border-0 w-full h-full"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 h-auto sm:h-[450px]
                                    lg:flex items-center
                                    bg-indigo-100
                                    px-4 lg:px-8 py-4
                                    bg-opacity-40">
                        <form className="w-full pt-3">
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100"
                                   className="ri-user-line text-white"></i>
                                <input type="text" placeholder="Enter your name"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                   className="ri-mail-line text-white"></i>
                                <input type="email"
                                       placeholder="Enter your email"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                   className="ri-focus-2-line text-white"></i>
                                <input type="text"
                                       placeholder="Subject"
                                       className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"
                                   className="ri-message-2-line text-white"></i>
                                <textarea
                                    rows={3}
                                    placeholder="Write a brief Message."
                                    className="w-full p-2 focus:outline-none rounded-[5px]"/>
                            </div>
                            <div className="mb-4 flex items-center justify-between text-2xl gap-4">
                                <i data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200"
                                   className="ri-mail-send-line text-white"></i>
                                <button className="w-full p-2 focus-outline-none rounded-[5px]
                                    bg-smallText font-[600]
                                    text-hOneColor hover:bg-newDarkAccent hover:text-white
                                    text-center ease-linear duration-150">

                                    Submit Message
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;