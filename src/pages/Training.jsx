import React, { useState } from 'react'
import { Tabs, Tab, Grid, Box, Typography, Button } from '@mui/material';
import training from '../assets/VEN06242-min-2048x1365.jpg'
import weight from '../assets/weight.png';
import { Link } from 'react-router-dom';

const Training = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const tabContents = [
        {
            title: "Online Fitness Consultation Program",
            content: [
                "1. Stay on track when traveling!",
                "2. Choose your coaching environment!",
                "3. Choose your training timings",
                "4. Fits into busy schedules!",
                "5. No travel time!"
            ]
        },
        {
            title: "Online Fitness Consultation Program",
            content: [
                "1.Personalized diet plan",
                "2. Training exercise tutorials (Exercise Videos)",
                "3. Sports supplements and nutrition",
                "4. Motivation and support system"
            ]
        },
        {
            title: "Mode of Online Fitness Training – Daily/Weekly guidance",
            content: [
                "1.Skype",
                "2. videos tutorials",
                "3. WhatsApp",
                "4. Gtalk",
                "5. Mobile",
                "6. Communication"
            ]
        },
        {
            title: "How Does Online Fitness Consultation Work?",
            content: [
                "1. You fill out contact us form",
                "2. We ask submit your details like medical history, goal, current schedule",
                "3. Once payment made, we prescribe diet, supplement guidance and training exercise",
                "4. Keeping the communication through skype, whatsapp and call for support, progress tracking and guidance Should you wish to have an online fitness consultation with myself please fill out the contact form with your contact details and outlining what time frame suits you best along with a brief overview of what you would like to discuss",
            ]
        },
        {
            title: "Benefits of Online Fitness Training",
            content: [
                "1. Stay on track when traveling!",
                "2. Choose your coaching environment!",
                "3. Choose your training timings Fits into busy schedules!",
                "4. No travel time!"
            ]
        }
    ];
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };
    return (
        <div className="mt-24 bg-gray-100 py-8">
            {/* First Section */}
            <Grid container spacing={3} className="first-section">
                <Grid item xs={12} md={6}>
                    <div className="image-container relative px-8">
                        <img src={training} alt="Background" className="w-full" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <Box className="content flex flex-col items-center px-8 py-8">
                        <Typography variant="h4" className="mb-4">Online Training</Typography>
                        <div className='py-4'>
                            <Typography variant="h6" style={{ marginBottom: '8px', textAlign: 'center' }}>Online Personal Trainer & Fitness Consultant in India</Typography>
                            <Typography variant="body1" className="mb-4" style={{ marginBottom: '8px', textAlign: 'center' }}>Venkat Fitness is a personal fitness trainer and consultant in India. Venkat Madamala is a certified online personal trainer with 15 years of rich experience in fitness. If you cannot hire a good fitness guide, I am here to help you achieve your fitness goals with all the convenience of time and training in your own home, gym, or other personal space.</Typography>
                            {showMore && (
                                <>
                                    <Typography variant="body1" style={{ marginBottom: '8px', textAlign: 'center' }}>Online personal training program will be customised according to the information based on your daily routine, medical history, diet and personal fitness goals. After thorough analysis of your requirement I shall come up with a diet and a fitness plan. With online fitness program I will be providing you diet tips, fitness consultation and motivation to help you get the desired body.</Typography>
                                    <Typography variant="body1" className="mb-4" style={{ marginBottom: '8px', textAlign: 'center' }}>More specifically, you’ll be learning from someone who has rich experience and high academic/fitness qualification.</Typography>
                                </>
                            )}
                        </div>
                        <div className='py-4'><button variant="contained" className="py-2 px-2 bg-Teal" onClick={handleToggleShowMore}>{showMore ? 'READ LESS' : 'READ MORE'}</button></div>
                    </Box>
                </Grid>
            </Grid>
            <Box className="second-section mt-8">
                <div className="hidden md:block">
                    <div className="p-8">
                        <ul className="grid grid-flow-col text-center text-gray-500 font-Poppins p-0 m-0">
                            {tabContents.map((tab, index) => (
                                <li key={index} className="list-none">
                                    <a className={`flex justify-center py-3 px-3 ${activeTab === index ? 'bg-primary border-l border-t border-r border-gray-100' : ''}`} onClick={() => setActiveTab(index)}>
                                        {tab.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-primary shadow border border-gray-100 p-8 text-gray-700 rounded-lg -mt-2">
                            <div className="p-8">
                                {tabContents[activeTab].content.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion for mobile screens */}
                <div className="md:hidden">
                    <div className="p-8">
                        {tabContents.map((tab, index) => (
                            <div key={index} className="mb-4 border-b border-gray-200">
                                <button className="w-full py-4 bg-gray-100 text-left" onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}>
                                    {tab.title}
                                </button>
                                {activeAccordion === index && (
                                    <div className="bg-primary shadow border border-gray-100 p-8 text-gray-700 rounded-lg mt-2">
                                        {tab.content.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
            {/* Third Section */}
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>MEMBERSHIP PACKAGES</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>Personalised Workout</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>Sixpack Packages</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>Couple Plans</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹15000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹40000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 3 Months</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹70000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 6 Months</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹125,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 1 Year</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>Customised Plans</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹15000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹40000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 3 Months</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹70,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 6 Months</Typography>
                        <Link to='/contact-us'><button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹120,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 1 Year</Typography>
                        <Link to='/contact-us'><button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button></Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins font-extrabold py-8'>For Online Registrations Please Contact : <br /> <a href="tel:+919676146789" style={{ color: 'inherit', textDecoration: 'none' }}>+91 96761 46789</a></Typography>
            <Typography variant="h6" className='text-center font-Poppins font-extrabold py-4'>Note : All the above packages are not refundable or not transferable</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>
                        <img src={weight} alt='weight' className='h-24 m-auto ' />
                        <Typography variant="h5" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '500' }}>Tailored Online Fitness Training</Typography>
                        <Typography variant="p" className='flex text-justify font-medium py-4 font-Poppins'>Our online fitness training programs are designed to target weight loss specifically. You won't find a one-size-fits-all approach here. We customize every workout to your unique needs and goals.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>
                        <img src={weight} alt='weight' className='h-24 m-auto ' />
                        <Typography variant="h5" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '500' }}>The Best Online Fitness Training</Typography>
                        <Typography variant="p" className='flex text-justify font-medium py-4 font-Poppins'>When it comes to online fitness training, we take pride in being the best. Our experienced trainers are dedicated to your success and will guide you every step of the way.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>
                        <img src={weight} alt='weight' className='h-24 m-auto ' />
                        <Typography variant="h5" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '500' }}>Best 1# Online Fitness Trainer In India</Typography>
                        <Typography variant="p" className='flex text-justify font-medium py-4 font-Poppins'>If weight loss is your primary goal, our online personal trainers specialize in creating effective weight loss plans tailored to your body and lifestyle.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>
                        <img src={weight} alt='weight' className='h-24 m-auto ' />
                        <Typography variant="h5" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '500' }}>Online Personal Trainer For Weight Loss</Typography>
                        <Typography variant="p" className='flex text-justify font-medium py-4 font-Poppins'>Our reputation speaks for itself. We're consistently ranked as one of the best online fitness trainers, our proven track record of helping clients achieve their weight loss goals.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Training