import React from 'react'
import bannerImage from '../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg';
import { Images } from '../utils/Data';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";



const Transformations = () => {
    const [index, setIndex] = React.useState(-1);
    const elementSize = 400;
    return (
        <div className='mt-2 py-20'>
            <div className="py-8">
                <div className="mx-auto text-center">
                    <img src={bannerImage} alt="Banner" className="w-full h-auto" />
                </div>
            </div>
            <div className='px-2 mx-auto'>
                <PhotoProvider>
                    <div className="flex flex-wrap justify-around">
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
    )
}

export default Transformations