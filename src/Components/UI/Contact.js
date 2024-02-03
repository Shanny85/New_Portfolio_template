import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="mt-0">
            <div className="container">
                <h2 data-aos="fade-right" data-aos-duration="1500"
                    className="pt-0 text-headingText flex items-center justify-center
                               text-[2.5rem] font-[700] mt-30 mb-4">
                    Lets Have a Chat
                </h2>
                <div className="flex flex-col lg:flex-row
                                items-center justify-evenly
                                px-4 lg:px-0
                                grow relative">
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 h-auto sm:h-[450px]
                                    lg:flex items-center
                                    bg-secondaryAccent
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
                                    text-headingText
                                    text-center ease-linear duration-150
                                    hover:text-primaryAccent
                                    hover:bg-secondaryAccent">

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