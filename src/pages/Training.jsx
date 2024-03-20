import React, { useState } from 'react'
import { Tabs, Tab, Grid, Box, Typography, Button } from '@mui/material';
import training from '../assets/VEN06242-min-2048x1365.jpg'
import weight from '../assets/weight.png';

const Training = () => {
    const [activeTab, setActiveTab] = useState(0);

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
                "Stay on track when traveling!",
                "Choose your coaching environment!",
                "Choose your training timings",
                "Fits into busy schedules!",
                "No travel time!"
            ]
        },
        {
            title: "How Does Online Fitness Consultation Work?",
            content: [
                "Stay on track when traveling!",
                "Choose your coaching environment!",
                "Choose your training timings",
                "Fits into busy schedules!",
                "No travel time!"
            ]
        },
        {
            title: "Benefits of Online Fitness Training",
            content: [
                "Stay on track when traveling!",
                "Choose your coaching environment!",
                "Choose your training timings",
                "Fits into busy schedules!",
                "No travel time!"
            ]
        }
    ];
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
                        </div>
                        <div className='py-4'><button variant="contained" className="py-2 px-2 bg-Teal">READ MORE</button></div>
                    </Box>
                </Grid>
            </Grid>
            <Box className="second-section mt-8">
                <Tabs
                    value={activeTab}
                    onChange={(e, value) => setActiveTab(value)}
                    textColor="#fff"
                    indicatorColor="primary"
                    scrollButtons="auto"
                >
                    {tabContents.map((tab, index) => (
                        <Tab className='w-72' key={index} label={tab.title} />
                    ))}
                </Tabs>
                <Box p={3}>
                    <Typography variant="body1">
                        {tabContents[activeTab].content.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </Typography>
                </Box>
            </Box>


            {/* Third Section */}
            <Typography variant="h4" className='text-center font-Poppins py-8' style={{ fontSize: '42px', fontWeight: '700' }}>MEMBERSHIP PACKAGES</Typography>
            <Grid container spacing={3} className="third-section mt-8 lg:px-16 px-4">
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
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
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
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
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹2000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Personalized Nutrition Plan - Diet Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹5000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Monthly</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
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
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹40000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 3 Months</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹70000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 6 Months</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px', textAlign: 'center' }}>Couple Plan</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹125,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 1 Year</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
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
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹40000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 3 Months</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-primary shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-primary shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #04879C', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹70,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 6 Months</Typography>
                        <button className='bg-Teal px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box className="card p-4 bg-Teal shadow-md border-2 h-[340px]">
                        <Box className="card p-6 bg-Teal shadow-lg font-Poppins text-2xl font-bold" style={{ boxShadow: '0px 0px 10px 0px #ffffff', marginBottom: '8px' }}>Premium Customised Plan (Live Class)</Box>
                        <Typography variant="h4" className='text-center font-bold py-2 font-Poppins' style={{ fontWeight: '600' }}>₹120,000</Typography>
                        <Typography variant="h5" className='text-center font-semibold py-4 font-Poppins'>Duration 1 Year</Typography>
                        <button className='bg-Teal border-2 px-4 py-2 text-center m-auto flex font-semibold font-Poppins'>Join Now</button>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" className='text-center font-Poppins font-extrabold py-8'>For Online Registrations Please Contact : <br /> +91 96761 46789</Typography>
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