import React from 'react'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import MuiLink from '@mui/material/Link'
import { Box, Typography } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'

const courseMenu = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Online Training',
    path: '/training',
  },
  {
    label: 'Transformations',
    path: '/transformations',
  },
  {
    label: 'About me',
    path: '/about',
  },
  {
    label: 'Contact Us',
    path: 'navlinks',
  },
]


const NavigationItem = ({ label, path }) => {
  return (
      <MuiLink
      component={Link}
      to={path}
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        {<KeyboardArrowRight className='text-Teal text-xl'/>}{label}
      </MuiLink>
  )
}

const FooterNavigation= () => {
  return (
    <Grid spacing={2} className='flex lg:justify-center'>
      <Grid item>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      <Typography component="p" variant="h5" sx={{ color: 'primary.contrastText', fontWeight: '700' }}>
        Menu
      </Typography>
    </Box>
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid> */}
    </Grid>
  )
}

export default FooterNavigation
