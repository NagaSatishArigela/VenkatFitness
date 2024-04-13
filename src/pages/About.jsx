import React from 'react';
import bannerImage from '../assets/fitness-trainer-scaled-1-2048x1151.jpg';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="title"
                    content="About Me - Best Fitness Trainer in Hyderabad - India"
                />
                <meta
                    name="description"
                    content=""
                />
                <meta
                    name="keywords"
                    content="About Me"
                />

                <meta
                    property="og:title"
                    content="About Me - Best Fitness Trainer in Hyderabad - India"
                />
                <meta
                    property="og:description"
                    content=""
                />
                <meta
                    property="og:image"
                    content=""
                />
                <meta property="og:url" content="https://venketfitness.com/about-me" />
            </Helmet>
            <div className="bg-gray-100 mt-12 py-20">
                <div className="mx-auto text-center">
                    {/* Banner Section */}
                    <div className="mb-12">
                        <img src={bannerImage} alt="Banner" className="w-full h-auto" />
                    </div>
                    {/* Text about Trainer */}
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8 font-Poppins">Venkat Certified Fitness Trainer || Professional Natural Bodybuilder</h2>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">I started my fitness career operating for somebody else until I felt it had been time to start out my very own business as a private trainer/fitness master. similar to the majority beginning a business I even have my share of challenges to beat. one in all it’s the very fact that nobody knew who I used to be and that I knew nobody after I started in Hyderabad. however, I trusted my instinct and that I knew I even have the talents and therefore the heart to try and do well within the fitness business. All I even have to try and do is take that opening.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">I am not only passionate about teaching fitness itself,but I am also passionate about motivating, inspiring, and helping people to achieve their fitness goals enjoyably. It didn’t take long for me to realize that this is what I was born to do. It is my calling. My approach is holistic, affordable, and fun for everyone. I’ll teach you how you can plan, prepare, and cook fresh organic food for your everyday diet. Eating healthily need not to be expensive. there’s a more robust and healthier method than going for affordable nutrition which is one amongst the causes of fatness. My program isn’t solely designed to assist people thin through food selections and exercise. The ultimate purpose of my program is to assist folks absolutely embrace a healthy fashion.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">Before coming to Hyderabad I was staying at Vijayawada as a trainee on eight seasons. When I came to Hyderabad I joined AddLife gymnasium and took categories and did certification courses, nutrition courses, took on-line fitness courses. Trained many folks, developed folks with six-packs, filmed a library of fitness videos, and helped many folks lose quite thousands of kilos through my on-line program. My approach is fortunate as a result of it focuses on a straightforward message: you’ve got the facility to vary your life, to get it focuses on a simple message: You have the power to change your life, to get healthy, to eat right, and to admire yourself – no matter your age, weight, or gender.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">I made sure my clients met me halfway. I even fired a few! It became known that if you were going to train with me you were going to have to be a man or woman of your word. Results! That is what turns people’s heads and has them wanting to work with you. Success is all down to how badly you want it. Nothing can ever be handed to you, and if it’s you ne’er appreciate it anyway. booming folks are arduous employees. I have slogged it out for more than 15 years experience certified fitness trainer in my industry. I gave all my time to traveling and dealing just about seven days per week. My friends and family gave up asking me to things as a result of they knew I’d invariably say, “Oh, I actually have to go to the athletic facility to work such weekend.” It enhanced a running joke. however, they invariably supported me.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">Our Mission</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">Inspire folks to include fitness in their daily routine by making a seamless network of gyms and fitness studios. Fitness could be a basic of life that shouldn’t be overpriced or inaccessible.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">Our Vission</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">Economical, convenient, and non-restrictive fitness solutions to create a nexus of happy and healthy folks.</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">MY NEW YEAR’S RESOLUTIONS</p>
                        <p className="text-xl mb-8 text-justify font-Poppins px-4">I am going to jot down the top goals of the New Year.</p>
                        <ul className='flex-col ml-8 px-4'>
                            <li className='list-disc px-2 text-lg text-justify mb-4'>Explore the wonders of the State: i’m already trying forward to seeing all styles of cities across the state. meaning meeting new and fascinating folks, attempting out new, exciting foods, and exploring the wonders of this nice state.</li>
                            <li className='list-disc px-2 text-lg text-justify mb-4'>Keep fit, eat healthily, live well: this is often a touch of a catch-all, I know. But really, I simply wish to stay active what I preach. i need to stay enjoying life, ingestion good, sweat often, and basic cognitive process in myself. That is what keeps ME happy daily.</li>
                            <li className='list-disc px-2 text-lg text-justify mb-4'>And my biggest goal for 2020 is To become the quantity one trainer in AP, place you back within the driver’s seat.</li>
                            <li className='list-disc px-2 text-lg text-justify mb-4'>I apprehend this is often chintzy, however my favorite issue within the world is to assist folk’s modification their lives. Candidly speaking, i’m not solely inquisitive about coaching celebrities – I’m additionally interested to coach a standard man. so is my #1 goal for 2020: to assist your manner and to allow you the tools to form that change. And bear in mind – summer bodies are created in winter, therefore now could be the time to induce moving!</li>
                        </ul>
                        {/* Add more text or content as needed */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
