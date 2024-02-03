import React, {useEffect, useState} from "react";
import data from "../../assets/data/hobbiesData";
import Modal from "./Modal";

const Hobbies = () => {
    const [nextItems, setNextItems] = useState(6);
    const [hobbyData, setHobbyData] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)

    const viewMoreHandler = () => {
        setNextItems(prev => prev + 3)
    };


    const showModalHandler = (id)=> {
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(() => {
        if(selectTab === 'books'){
            const filteredData = data.filter(item => item.category === 'Books')
            setHobbyData(filteredData)
        }

        if(selectTab === 'movies'){
            const filteredData = data.filter(item => item.category === 'Movies')
            setHobbyData(filteredData)
        }

        if(selectTab === 'series'){
            const filteredData = data.filter(item => item.category === 'Series')
            setHobbyData(filteredData)
        }

    },[selectTab])

    return(
        <section id="hobbies">
            <div className="container">
                <div className="flex sm:items-center items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 data-aos="fade-right" data-aos-duration="1500"
                            className="text-headingText text-[2rem] font-[700] drop-shadow">
                            My Hobbies...
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => setSelectTab('books')}
                                className="text-smallText border border-solid border-secondaryAccent
                        py-2 px-4 rounded-[8px] hover:bg-secondaryAccent
                        hover:text-primaryAccent ease-in duration-300 drop-shadow">
                            Books
                        </button>
                        <button onClick={() => setSelectTab('movies')}
                                className="text-smallText border border-solid border-secondaryAccent
                        py-2 px-4 rounded-[8px] hover:bg-secondaryAccent
                        hover:text-primaryAccent ease-in duration-300 drop-shadow">
                            Movies
                        </button>
                        <button onClick={() => setSelectTab('series')}
                                className="text-smallText border border-solid border-secondaryAccent
                        py-2 px-4 rounded-[8px] hover:bg-secondaryAccent
                        hover:text-primaryAccent ease-in duration-300 drop-shadow">
                            Series
                        </button>
                    </div>
                </div>
                <div className="flex sm:items-center items-center gap-3 flex-wrap mt-12">
                    {
                        hobbyData?.slice(0, nextItems)?.map((hobbyData, index) => (
                            <div
                                key={index}
                                data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                className="group max-w-full sm:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className="flex sm:translate-x-1/2 translate-x-1/2 rounded-[8px] w-1/2 h-1/2 " src={hobbyData.imgUrl} alt=""/>
                                </figure>
                                {/*<div className="w-full h-full bg-headingText bg-opacity-40 absolute*/}
                                {/*top-0 left-0 z-[5] hidden group-hover:block">*/}
                                {/*    /!*<div className="w-full h-full flex items-center justify-center">*!/*/}

                                {/*    /!*</div>*!/*/}

                                {/*</div>*/}
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-6">
                    {
                        nextItems < hobbyData.length && data.length > 6 &&
                        <button onClick={viewMoreHandler}
                                className="text-primaryAccent bg-headingText
                                           hover:bg-newDarkAccent py-2 px-4 rounded-[8px] font-[500]
                                           ease-in duration-200">
                            View More
                        </button>
                    }

                </div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    )
}

export default Hobbies;