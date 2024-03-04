import React from 'react'
import banner from '../assets/Fitness-Trainer-in-Hyderabad.jpg'
import mobileBanner from '../assets/Personal-Trainer-near-me-in-Hyderabad.jpg'
import picture1 from '../assets/PERSONAL-TRAINER-IN-HYDERABAD.webp'
import ProgressBar from '../utils/ProgressBar'
import Slider from 'react-slick'
import image1 from '../assets/gym-trainer-in-hyderabad-600x400-1.webp'

const Home = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // prevArrow: <SliderArrow type="prev" />,
        // nextArrow: <SliderArrow type="next" />,
        dots: true,
       // appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        // customPaging: () => (
        //   <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
        // ),
      }
    return (
        <div className='top-[120px] relative'>
            <div>
                <img src={banner} alt='Venkat Trainer' className='w-full hidden lg:block' />
                <img src={mobileBanner} alt='Venkat Trainer' className='w-full lg:hidden' />
            </div>
            <div className='flex m-8'>
                <h1 className="text-18 sm:text-5xl font-bold font-Poppins p-8 m-auto">Venkat Fitness – Certified Celebrity Fitness Trainer</h1>
            </div>
            <div className='flex flex-col items-center'>
                <h4 className='text-4xl font-Poppins font-bold uppercase m-auto pb-20'>Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Box 1 */}
                    <div className="bg-Teal rounded-t-full p-6 h-fit">
                        <img src={picture1} alt="Service 1" className="w-full mb-4 bg-Teal " />
                        <h5 className="text-white text-lg font-semibold mb-2">Service 1 Title</h5>
                        <ul className="text-white">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                            <li>Bullet point 4</li>
                        </ul>
                    </div>
                    <div className="bg-Teal rounded-t-full p-6 h-fit">
                        <img src={picture1} alt="Service 1" className="w-full mb-4 bg-Teal " />
                        <h5 className="text-white text-lg font-semibold mb-2">Service 1 Title</h5>
                        <ul className="text-white">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                            <li>Bullet point 4</li>
                        </ul>
                    </div>
                    <div className="bg-Teal rounded-t-full p-6 h-fit">
                        <img src={picture1} alt="Service 1" className="w-full mb-4 bg-Teal " />
                        <h5 className="text-white text-lg font-semibold mb-2">Service 1 Title</h5>
                        <ul className="text-white">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                            <li>Bullet point 4</li>
                        </ul>
                    </div>
                    <div className="bg-Teal rounded-t-full p-6 h-fit">
                        <img src={picture1} alt="Service 1" className="w-full mb-4 bg-Teal " />
                        <h5 className="text-white text-lg font-semibold mb-2">Service 1 Title</h5>
                        <ul className="text-white">
                            <li>Bullet point 1</li>
                            <li>Bullet point 2</li>
                            <li>Bullet point 3</li>
                            <li>Bullet point 4</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Trainer Skills</h2>
                    <p className="text-lg mb-12">Venkat Madamala is a certified online personal trainer with 15 years of rich experience in fitness.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Skill Box 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                            </svg>

                            {/* <Profile className="h-12 w-12 mx-auto mb-4" /> */}
                            <h3 className="text-xl font-semibold mb-4">Professional Trainer</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur nulla sed ex placerat, ac convallis metus varius.</p>
                        </div>


                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>

                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                            </svg>

                        </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        <ProgressBar title="Weight Lost" percentage={85} />
                        <ProgressBar title="Client Consultation" percentage={75} />
                        <ProgressBar title="Exercise Training" percentage={95} />
                        <ProgressBar title="Junior Training" percentage={90} />
                        <ProgressBar title="Yoga Training" percentage={92} />
                        <ProgressBar title="Old Health Training" percentage={65} />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-12">Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <iframe
                                width="auto"
                                height="315"
                                src="https://www.youtube.com/embed/video1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="text-lg mt-4">Review 1</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <iframe
                                width="auto"
                                height="315"
                                src="https://www.youtube.com/embed/video2"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="text-lg mt-4">Review 2</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <iframe
                                width="auto"
                                height="315"
                                src="https://www.youtube.com/embed/video3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="text-lg mt-4">Review 3</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <iframe
                                width="auto"
                                height="315"
                                src="https://www.youtube.com/embed/video4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="text-lg mt-4">Review 4</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:p-40'>
                <h2 className='container mx-auto text-center font-bold text-4xl mb-10'>HIGH PERFORMANCE FACILITIES <br/>
GYM In Hyderabad</h2>
                <Slider {...sliderConfig}>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                        <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full flex justify-center items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                    <div className='lg:w-1/4 md:w-full items-center'>
                    <img src={image1} alt='image1' className='h-56'/>
                    </div>
                </Slider>
            </div>
            <div className=''>
                <h1 className="text-18 sm:text-5xl font-bold font-Poppins p-8 m-auto flex items-center justify-center">Venkat Fitness – Certified Celebrity Fitness Trainer</h1>
                <div className="grid grid-cols-3 gap-8 bg-Teal w-full">
                    <div className='flex-col col-span-2 m-auto pt-8 bg-Teal h-48'>
                        <h2 className='bg-Teal'>Achieve Your Fitness Goals</h2>
                        <p className='text-2xl'>Flexible membership packages to suit all levels of training to help achieve your fitness goals</p>
                    </div>
                    <div className='m-auto pb-8'>
                        <button className='bg-primary '>Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home