import React, {useState} from "react";
import data from "../../assets/data/achievementsData";


const Achievements = () => {
    const [nextItems, setNextItems] = useState(6);
    const [achieved] = useState(data);


    const viewMoreHandler = () => {
        setNextItems(prev => prev + 3)
    };


    return (
        <section id="achievements">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingText text-[2rem] font-[700] drop-shadow">
                            My Achievements
                        </h3>
                    </div>

                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        achieved?.slice(0, nextItems)?.map((achieved, index) => (
                            <div
                                key={index}
                                data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                className="group max-w-full sm:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className="w-1/4 h-1/4 " src={achieved.imgUrl} alt=""/>
                                </figure>
                                <div className="w-full h-full absolute top-0 left-0">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <h2>
                                            {achieved.title}
                                        </h2>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-6">
                    {
                        nextItems < achieved.length && data.length > 6 &&
                        <button onClick={viewMoreHandler}
                                className="text-primaryAccent bg-headingText
                                           hover:bg-newDarkAccent py-2 px-4 rounded-[8px] font-[500]
                                           ease-in duration-200">
                            View More
                        </button>
                    }

                </div>
            </div>

        </section>
    )

}
export default Achievements;
