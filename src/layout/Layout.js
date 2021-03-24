import React, {useEffect} from 'react';
import Navbar from './Navbar'
import ToolbarMenu from "./Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import PageMessage from "../components/PageMessage";
import {setLoading} from "../store/actions";
import {withRouter} from "react-router";
import {setMessage} from "../store/actions";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
    },
}));

function App(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {navbar, toolbar, children} = props;
    const {message} = useSelector(state => state.settings.layout);

    useEffect(() => {
        // dispatch(setLoading(true));
        if(message){
            clearMessage();
        }
    }, []);

    function clearMessage() {
        setTimeout(()=>{
            dispatch(setMessage(null, "success"))
        },3000)
    }



    return (
        <div className={classes.root}>


            {
                toolbar && (
                    <ToolbarMenu/>
                )
            }


            {
                navbar && (
                    <Navbar/>
                )
            }


            {
                <main className={classes.content}>

                    {
                        toolbar && (
                            <div className={classes.toolbar} />
                        )
                    }

                    {
                        message && message.text && (
                            <PageMessage/>
                        )
                    }

                    {
                        children
                    }

                </main>
            }
        </div>
    );
}

export default withRouter(App);