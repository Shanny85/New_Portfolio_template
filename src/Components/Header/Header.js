import React, {useRef, useEffect, useState} from 'react';

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);



    const stickyFunctionForHeader = () => {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky-head-section')
            }else{
                headerRef.current.classList.remove('sticky-head-section')
            }
        })
    }

    useEffect(() =>{
        stickyFunctionForHeader()
        return window.removeEventListener('scroll', stickyFunctionForHeader)

    },[]);

    const handleClick = e => {
        e.preventDefault()
        const targetAttribute = e.target.getAttribute('href');
        const location = document.querySelector(targetAttribute).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    const menuSwitch = () => menuRef.current.classList.toggle('display_menu')

    return(
        <header ref={headerRef}
                className="w-full flex items-center h-[80px] leading-[80px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    {/*Logo*/}
                    <div className="flex items-center gap-[10px]">
                        <div className="leading-[20px]">
                            <h2 className="text-xl text-headingText font-[700]">
                                Sibonelo
                            </h2>
                        </div>
                    </div>
                    {/*Logo end */}

                    {/*Menu start */}
                    <div className="menu" ref={menuRef} onClick={menuSwitch}>
                        <ul className="flex items-center gap-10">
                            <li><a onClick={handleClick}

                                   className="
                                   flex items-center gap-2 text-headingText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:text-secondaryAccent active:text-gray-400
                                   hover:font-[600] ease-in duration-300"
                                   href="#about">About</a>
                            </li>
                            <li><a onClick={handleClick}
                                   className="flex items-center gap-2 text-headingText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:text-secondaryAccent active:text-gray-400
                                   hover:font-[600] ease-in duration-300"
                                   href="#portfolio">Projects</a>
                            </li>
                            <li><a onClick={handleClick}
                                   className="flex items-center gap-2 text-headingText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:text-secondaryAccent active:text-gray-400
                                   hover:font-[600] ease-in duration-300"
                                   href="#achievements">Achievements</a>
                            </li>
                            <li><a onClick={handleClick}
                                   className="flex items-center gap-2 text-headingText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:text-secondaryAccent active:text-gray-400
                                   hover:font-[600] ease-in duration-300"
                                   href="#hobbies">Hobbies</a>
                            </li>
                            <li><a onClick={handleClick}
                                   className="flex items-center gap-2 active:text-gray-400 text-headingText font-[600]
                                   py-2 px-4 rounded-[8px] max-h-[40px]
                                   hover:text-secondaryAccent
                                   hover:font-[600] ease-in duration-300 "
                                   href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {/*Menu end */}

                    {/*Menu right side*/}
                    <div className="flex items-center gap-4">
                        <a href="#contact">
                            <button
                                className="flex items-center gap-2 text-headingText font-[600]
                                border border-solid border-primaryAccent py-2 px-4 rounded-[8px] max-h-[40px]
                                hover:bg-secondaryAccent
                                hover:text-primaryAccent
                                hover:font-[600] ease-in duration-300">
                                Let's Chat
                            </button>
                        </a>
                        <span onClick={menuSwitch} className="cursor-pointer text-2xl text-primaryAccent md:hidden">
                            <i className="ri-menu-line">
                            </i>
                        </span>
                    </div>
                    {/*Menu right side end */}

                </div>
            </div>
        </header>
    )
};
export default Header;