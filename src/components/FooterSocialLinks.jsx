import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import facebook from '../assets/facebook.svg'
import icon1 from '../assets/twitter.svg'
import icon2 from '../assets/instagram.svg'
import icon3 from '../assets/youtube.svg'
import icon4 from '../assets/linkedin-161-svgrepo-com.svg'
import icon5 from '../assets/spotify-svgrepo-com.svg'

export const socialLinks = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/venkat.fitnesstrainer/',
        icon: facebook,
    },
    {
        name: 'Instagram',
        link: '#',
        icon: icon2,
    },
    {
        name: 'YouTube',
        link: '#',
        icon: icon3,
    },
    {
        name: 'Twitter',
        link: '#',
        icon: icon1,
    },
    {
        name: 'Linkedln',
        link: '#',
        icon: icon4,
    },
    {
        name: 'Spotify',
        link: '#',
        icon: icon5,
    },
]

const SocialLinkItem = ({ item }) => (
    <Box
        component="li"
        sx={{
            display: 'inline-block',
            color: 'primary.contrastText',
            mr: 0.5,
        }}
    >
        <Link
            target="_blank"
            sx={{
                lineHeight: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                color: 'inherit',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                },
                '& img': {
                    fill: 'currentColor',
                    width: 22,
                    height: 'auto',
                },
            }}
            href={item.link}
        >
            {/* eslint-disable-next-line */}
            <img src={item.icon} alt={item.name + 'icon'} />
        </Link>
    </Box>
)

// default
const SocialLinks = () => {
    return (
        <Box sx={{ ml: -1 }}>
            <Box
                component="ul"
                sx={{
                    m: 0,
                    p: 0,
                    lineHeight: 0,
                    borderRadius: 3,
                    listStyle: 'none',
                }}
            >
                {socialLinks.map((item) => {
                    return <SocialLinkItem key={item.name} item={item} />
                })}
            </Box>
        </Box>
    )
}

export default SocialLinks
