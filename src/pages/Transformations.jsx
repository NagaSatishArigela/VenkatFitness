import React from 'react'
import bannerImage from '../assets/Venkat-Fitness-Transformations-scaled-e1704266804184-2048x734.jpeg';
import { slides } from '../utils/Data';
import PhotoAlbum from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const Transformations = () => {
    const [index, setIndex] = React.useState(-1);

    return (
        <div className='mt-2 py-20'>
            <div className="py-8">
                <div className="mx-auto text-center">
                    <img src={bannerImage} alt="Banner" className="w-full h-auto" />
                </div>
            </div>
            <div className='px-2'>
            <PhotoAlbum
                layout="rows"
                photos={slides}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
               // className="lightbox-container"
                close={() => setIndex(-1)}
            />
            </div>
        </div>
    )
}

export default Transformations