import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

import SnackbarContent from '@mui/material/SnackbarContent';
import { minWidth } from '@mui/system';
import Slide from '@mui/material/Slide';
import { Alert } from '@mui/material';




const SnackbarPopUp = (props) => {
    const { open, setopenpopup, messageInfo , type } = props
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopenpopup(false);
    };
    function SlideTransition(props) {
        return <Slide {...props} direction="down" />;
    }

    return (
        open &&
        <Snackbar
            open={open}
            style={{ display: open ? "block" : "none" }}
            autoHideDuration={2000}
            TransitionComponent={SlideTransition}
            onClose={handleClose}
            message={messageInfo}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert onClose={handleClose}  variant="filled" severity={type} sx={{ width: '25vw' }}>
                {messageInfo}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarPopUp