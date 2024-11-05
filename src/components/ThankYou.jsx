import React from 'react';
import SocialLinks from './FooterSocialLinks';
import { Link } from 'react-router-dom';
import logo from '../assets/Venkat-fitness-trainer.png'

const ThankYou = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-36">
            <h1 className="text-[48px] font-bold mb-4 font-Poppins pt-12">Thank You</h1>
            <p className='text-xl'>The form was submitted successfully</p>
            <Link to='/'><img src={logo} alt='Venket Fitness' style={{ height: '180px' }} loading='lazy'/></Link>
            <h4 className="text-xl font-semibold mb-2">OUR TEAM WILL GET BACK TO YOU SOON</h4>
            <h4 className="text-xl font-semibold mb-4">FOLLOW US ON SOCIAL MEDIA</h4>
            <SocialLinks />
        </div>
    );
};

export default ThankYou;
