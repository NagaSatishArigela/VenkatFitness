import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const ThankyouModal = (props) => {
    return (
        <Dialog
            open={props?.open}
            onClose={props?.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" className='text-center text-2xl'>{"Thank You"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Our Team will reach you out soon. 
                </DialogContentText>
            </DialogContent>
            <DialogActions className='m-auto'>
                <Button onClick={props?.handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ThankyouModal