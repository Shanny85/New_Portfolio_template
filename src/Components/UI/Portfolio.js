import React,{useState, useEffect} from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
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
        if(selectTab === 'all'){
            setPortfolios(data)
        }

        if(selectTab === 'web-design'){
            const filteredData = data.filter(item => item.category === 'Web Design')
            setPortfolios(filteredData)
        }

        if(selectTab === 'ux-design'){
            const filteredData = data.filter(item => item.category === 'Ux')
            setPortfolios(filteredData)
        }

    },[selectTab])

    return(
        <section id="portfolio">
            <div
                className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 data-aos="fade-right" data-aos-duration="1500"
                            className="text-headingText text-[2rem] font-[700] drop-shadow">
                            My Latest Projects...
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => setSelectTab('all')}
                                className="text-smallText border border-solid border-blueCol
                        py-2 px-4 rounded-[8px] hover:bg-blueCol
                        hover:text-white ease-in duration-300 drop-shadow font-bold">
                            All</button>
                        <button onClick={() => setSelectTab('web-design')}
                                className="text-smallText border border-solid border-blueCol
                        py-2 px-4 rounded-[8px] hover:bg-blueCol
                        hover:text-white ease-in duration-300 drop-shadow font-bold">
                            Web Design</button>
                        <button onClick={() => setSelectTab('ux-design')}
                                className="text-smallText border border-solid border-blueCol
                        py-2 px-4 rounded-[8px] hover:bg-blueCol
                        hover:text-white ease-in duration-300 drop-shadow font-bold">
                            App Development</button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                            <div
                                key={index}
                                data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                className="group max-w-full sm:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className="rounded-[8px] " src={portfolio.imgUrl} alt=""/>
                                </figure>
                                <div className="w-full h-full bg-headingText bg-opacity-40 absolute
                                top-0 left-0 z-[5] hidden group-hover:block">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <button
                                            onClick={()=> showModalHandler(portfolio.id)}
                                            className="text-primaryAccent bg-smallText
                                        hover:bg-blueCol hover:text-headingText py-2 px-4 rounded-[8px] font-[500]
                                        ease-in duration-200">
                                            View Details
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-6">
                    {
                        nextItems < portfolios.length && data.length > 6 &&
                        <button onClick={viewMoreHandler}
                                className="text-primaryAccent bg-blueCol
                                           hover:text-white
                                           hover:font-bold py-2 px-4 rounded-[8px] font-[500]
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
    );
}

export default Portfolio;