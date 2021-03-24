import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {withRouter} from "react-router";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#303030",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
}));

function ButtonAppBar(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {isNavBarOpen} = useSelector(state => state.settings.layout);

    const { t, i18n } = useTranslation();

    const handleDrawerOpen = () => {
        dispatch(Actions.openNavBar());
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isNavBarOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: isNavBarOpen,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <div className="flex w-full justify-between items-center">
                    <Typography variant="h6" noWrap>
                        <p>{t('toolbar.title')}</p>
                    </Typography>


                    <div>
                        <IconButton
                            className="text-white"
                            aria-label="delete" key={"key"}
                            onClick={() => {
                                localStorage.clear();
                                dispatch(Actions.setLoading(false));
                                dispatch(Actions.setMessage(null, "success"));
                                props.history.push('/login');
                            }}
                        >
                            <ExitToAppIcon className="text-white"/>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>


        </AppBar>
    );
}

export default withRouter(ButtonAppBar);