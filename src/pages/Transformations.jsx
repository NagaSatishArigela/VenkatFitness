import React from 'react'
import bannerImage from '../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg';
import { Images } from '../utils/Data';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Helmet } from 'react-helmet';



const Transformations = () => {
    const [index, setIndex] = React.useState(-1);
    const elementSize = 400;
    return (
        <>
            <Helmet>
                <meta
                    name="title"
                    content="Transformations by VENKAT FITNESS || Best FITNESS TRAINER in Hyderabad"
                />
                <meta
                    name="description"
                    content="Here We go the Transformations of Our Clients you can see their transformation journeys.Venkat Fitness Trainer is the Best FITNESS TRAINER in Hyderabad for your Fitness Journey."
                />
                <meta
                    name="keywords"
                    content="Transformations"
                />

                <meta
                    property="og:title"
                    content="Transformations by VENKAT FITNESS || Best FITNESS TRAINER in Hyderabad"
                />
                <meta
                    property="og:description"
                    content="Here We go the Transformations of Our Clients you can see their transformation journeys.Venkat Fitness Trainer is the Best FITNESS TRAINER in Hyderabad for your Fitness Journey."
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta property="og:url" content="https://venketfitness.com/transformations" />
            </Helmet>
            <div className='mt-2 py-20'>
                <div className="py-8">
                    <div className="mx-auto text-center">
                        <img src={bannerImage} alt="Banner" className="w-full h-auto" />
                    </div>
                </div>
                <div className='px-2 mx-auto'>
                    <PhotoProvider>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                            {Images.map((item, index) => (
                                <PhotoView
                                    key={index}
                                    src={item}
                                    width={elementSize}
                                    height={elementSize}
                                >
                                    <img
                                        src={item}
                                        alt=""
                                        style={{ height: "500px", width: "350px", padding: "8px" }}
                                    />
                                </PhotoView>
                            ))}
                        </div>
                    </PhotoProvider>
                </div>
            </div>
        </>
    )
}

export default Transformations