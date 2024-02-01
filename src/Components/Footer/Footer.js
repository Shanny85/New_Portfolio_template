import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            {/*Footer top*/}
            <div className="container" id="footer">
                <div className="sm:flex item-center justify-center md:gap-9">
                    <div className="flex items-center justify-center gap-4 flex-wrap md:gap-8 mt-10">
                        <span className="w-[35px] h-[35px] bg-newPrimaryColor p-1 cursor-pointer
                            text-center">
                                <a data-aos="fade-up" data-aos-durations="1500" data-aos-delay="150"
                                   href="#github"
                                   className="text-newDarkAccent
                                   text-[35px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-githubColor drop-shadow">
                                    <i className="ri-github-line"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a data-aos="fade-up" data-aos-durations="1500" data-aos-delay="200"
                                   href="#linkedin"
                                   className="text-newDarkAccent
                                   text-[35px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-linkedInColor drop-shadow">
                                    <i className="ri-linkedin-line"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a data-aos="fade-up" data-aos-durations="1500" data-aos-delay="250"
                                   href="#pintrest"
                                   className="text-newDarkAccent
                                   text-[35px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-pinterestColor drop-shadow">
                                    <i className="ri-pinterest-line"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a data-aos="fade-up" data-aos-durations="1500" data-aos-delay="300"
                                   href="#youtube"
                                   className="text-newDarkAccent
                                   text-[35px] font-[500] hover:bg-newNeonAccent
                                   rounded-md py-1,5 px-2 hover:text-youtubeColor drop-shadow">
                                    <i className="ri-youtube-line"></i>
                                </a>
                        </span>
                    </div>
                </div>
            </div>
            {/*Footer top end*/}
            {/*Footer bottom*/}
            <div className=" py-3 mt-14 ">
                <div className="container">
                    <div className="flex items-center sm:justify-center ">
                        <div className="hidden sm:block ">
                            <div>
                                <p className="text-mainBg text-[14px]">
                                    Copyright developed by Smokeofw@r {year} - All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Footer bottom end*/}
        </footer>
    )
}

export default Footer;