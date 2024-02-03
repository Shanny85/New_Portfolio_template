import React from "react";
import 'remixicon/fonts/remixicon.css'
const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            {/*Footer top*/}
            <div className="container" id="footer">
                <div className="sm:flex item-center justify-center md:gap-9">
                    <div className="flex items-center justify-center gap-4 flex-wrap md:gap-8 mt-10">
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a
                                   href="#github"
                                   className="text-headingText
                                   text-[35px] font-[500]
                                   rounded-md py-1,5 px-2 hover:text-githubColor drop-shadow">
                                    <i className="ri-github-line"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a
                                   href="#linkedin"
                                   className="text-headingText
                                   text-[35px] font-[500]
                                   rounded-md py-1,5 px-2 hover:text-linkedInColor drop-shadow">
                                    <i className="ri-linkedin-line"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a
                                   href="#pintrest"
                                   className="text-headingText
                                   text-[35px] font-[500]
                                   rounded-md py-1,5 px-2 hover:text-pinterestColor drop-shadow">
                                    <i className="ri-pinterest-fill"></i>
                                </a>
                        </span>
                        <span className="w-[35px] h-[35px] p-1 cursor-pointer
                            text-center">
                                <a
                                   href="#youtube"
                                   className="text-headingText
                                   text-[35px] font-[500]
                                   rounded-md py-1,5 px-2 hover:text-youtubeColor drop-shadow">
                                    <i className="ri-youtube-fill"></i>
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