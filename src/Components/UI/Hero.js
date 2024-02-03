import React, {useRef} from 'react';
import heroImg from '../../assets/images/Sibonelo Msabala.png';
import CountUp from 'react-countup';


const Hero = () => {
    const headerRef = useRef(null);

    const handleClick = e => {
        e.preventDefault()
        const targetAttribute = e.target.getAttribute('href');
        const location = document.querySelector(targetAttribute).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    return (
        <section ref={headerRef}
                 className="pt-0 " id='about'>
            <div className="container pt-3">
                <div className="items-center justify-between sm:flex-col md:flex md:flex-row">
                    {/*Hero Content Left Side */}
                    <div className="w-full md:basis-1/2">
                        <h5 data-aos="fade-right" data-aos-duration="1500"
                            className="text-headingText font-[600] text-[16px] drop-shadow">
                            Hi and Welcome
                        </h5>
                        <h1 data-aos="fade-up" data-aos-duration="1500"
                            className="mt-5 text-headingText font-[800] text-[1.8rem] leading-[35px]
                            sm:text-[40px] sm:leading-[46px] drop-shadow">
                            I'm <span className="text-secondaryAccent">S</span>ibonelo <span className="text-primaryAccent">M</span>sabala <br/>
                            Software Developer
                        </h1>
                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-smallText pr-8 mt-10 font-[500]
                           text-[18px] leading-7
                           sm:pl-14 ri-sm:pr-10">
                            As an aspiring software developer with a passion for solving complex problems and
                            creating innovative solutions.
                            Proficient in programming languages and technologies,
                            committed to continuous learning, and dedicated to delivering exceptional results.
                            Skilled in effective collaboration, clear communication, and timely project delivery.
                        </p>
                    </div>
                    {/*Hero Content Left Side end */}

                    {/*Hero Image */}
                    <div data-aos="fade-left" data-aos-duration="1500"
                         className="basis-1/3 mt-4 sm:mt-5 ">
                        <figure className="flex items-center justify-center">
                            <img className="rounded-t-full" src={heroImg} alt=""/>
                        </figure>
                    </div>
                    {/*Hero Image end */}
                </div>

                {/*-------------Count UP SECTION BELOW HERO-------------*/}
                <div id="below_hero"
                     className="flex flex-wrap justify-center
                                text-center mt-10 gap-3
                                md:gap-0 items-center
                                md:text-center md:justify-evenly">
                    <div className="mb-10">
                        <h2 className="text-secondaryAccent font-[700] text-[28px] drop-shadow">
                            <CountUp start={0} end={50} suffix=' +' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Satisfied Clients
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-secondaryAccent font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={10} suffix=' +' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Services Provided
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-secondaryAccent font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={25} suffix=' +' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Achievements
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-secondaryAccent font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={6} suffix=' +' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Programing Languages
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-secondaryAccent font-[700] text-[32px] drop-shadow">
                            <CountUp start={0} end={100} suffix=' %' />
                        </h2>
                        <h4 className="text-smallText font-[700] text-[18px] drop-shadow">
                            Projects Completed
                        </h4>
                    </div>
                </div>
                {/*-------------Count UP SECTION BELOW HERO END-------------*/}
            </div>
        </section>
    )
};
export default Hero;
