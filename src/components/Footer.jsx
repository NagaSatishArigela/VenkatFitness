import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SocialLinks from './FooterSocialLinks'
import logo from '../assets/cropped-cropped-Venkat-sir-yellow-glow-logo-003-1.webp'
import map from '../assets/map.svg'
import FooterNavigation from './FooterNavigation'
// import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer = () => {
  return (
    <Grid container spacing={1} className='lg:px-20 md:px-12 sm: px-8' style={{marginTop: '128px'}}>
      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ width: '100% '}}>
          <div className='flex items-center p-2'>
          <img src={logo} alt='Venket Fitness' style={{ height: '90px' }} />
          <Typography className='text-justify' sx={{ letterSpacing: 1, mb: 2, fontSize: '30px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
            Venket Fitness
          </Typography>
          </div>
          <Typography variant="subtitle2" sx={{ letterSpacing: 1, mb: 2, fontFamily: 'Poppins, sans-serif' }}>
            Online Personal Trainer & Fitness Consultant in India
          </Typography>
          <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2, fontFamily: 'Poppins, sans-serif' }}>
            Venkat Fitness is a personal fitness trainer and consultant in India. Venkat Madamala is a certified online personal trainer with 15 years of rich experience in fitness. If you cannot hire a good fitness guide, I am here to help you achieve your fitness goals with all the convenience of time and training in your own home, gym, or other personal space.
          </Typography>
          <SocialLinks />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FooterNavigation />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ width: '100%' }}>
          <Typography className='text-justify' sx={{ mb: 2, fontSize: '24px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
            Opening Times
          </Typography>
          <img src={map} alt='Venket Fitness' style={{ height: '40px', marginBottom: '12px' }} />
          <Typography className='text-justify' sx={{ mb: 2, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
            8-2-293/82/J/A/52, Journalist Co-op Housing Society, Jubilee Hills, Hyderabad, Telangana 500082.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: '18px', color: '#2F6C6D', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
            Weekdays Monday - Friday
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif', color: 'gray' }}>
            05:00 - 19:00
          </Typography>
          <Typography sx={{ mb: 2, fontSize: '18px', color: '#2F6C6D', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
            Weekends Saturday - Sunday
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, fontFamily: 'Poppins, sans-serif', color: 'gray' }}>
            05:00 - 19:00
          </Typography>
          <SocialLinks />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ width: '100%' }}>
          <Typography className='text-justify' sx={{ mb: 2, fontSize: '24px', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>
            Contact Us
          </Typography>
          <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%', marginBottom: '5px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7797771.444058482!2d73.50796313849342!3d17.387507893565136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svenkat%20fitness!5e0!3m2!1sen!2sus!4v1709823296440!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer
