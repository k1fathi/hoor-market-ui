import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function PageMessage() {
    const {message} = useSelector(state => state.settings.layout);
    const [open, setOpen] = React.useState(message);

    useEffect(() => {
        setOpen(true);
    }, [message]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={message.type}>
                {message.text}
            </Alert>
        </Snackbar>
    )
}

export default PageMessage;