import React, {useEffect, useState, useRef} from 'react';
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
import marketLogo from "../sources/toolbar/marketLogo.png";
import SearchBar from "../components/SearchBar";
import AvatarInfo from "../components/AvatarInfo";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import "./Toolbar.css";

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "64px",
        maxWidth: "1440px",
        alignSelf: "center",
        width: "100%",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#07A0DA",
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
    },
    listIcons:{
        fontColor:"black",
        marginTop: '5px',
        alignSelf: 'center',
        fontSize: '24px',
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {isNavBarOpen} = useSelector(state => state.settings.layout);

    const { t, i18n } = useTranslation();
    const [showAvatarMenu, setShowAvatarMenu ] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowAvatarMenu(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const handleMenuItem = () =>{
        setShowAvatarMenu(!showAvatarMenu);
    };


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
                <div className="flex w-full justify-between items-center" style={{maxWidth: "1440px", marginRight: "auto", marginLeft: "auto"}}>
                    <Typography variant="h6" noWrap >
                        <img onClick={()=>props.history.push('/')} className="h-10" src={marketLogo} alt="logo"/>
                    </Typography>

                    <div>
                        <SearchBar />
                    </div>



                    <div className="flex justify-center items-center">
                        <span className="mr-8">
                            <LocalMallOutlinedIcon onClick={()=>props.history.push('/')} fontSize="large"/>
                        </span>
                        <span className="mr-8">
                            <NotificationsNoneIcon fontSize="large"/>
                        </span>
                        <span style={{zIndex:10}} ref={wrapperRef} onClick={handleMenuItem} className="cursor-pointer">
                            <AvatarInfo />

                            {showAvatarMenu ?
                                <div className="AvatarMenuItems rounded shadow-lg flex flex-col mt-2" style={{backgroundColor: "white"}}>
                                    <NavLink  to="/" className="flex justify-start px-2 py-2 toolbar-profile-item text-black" activeClassName="active-navlink">
                                        <span className="flex">
                                        <QueueOutlinedIcon  className={classes.listIcons} />
                                        <p className="ml-2 font-bold toolbar-menu-item-title self-center ">Ürün Ekleme</p>
                                        </span>
                                    </NavLink>

                                    <NavLink  to="/" className="flex justify-start px-2 py-2 toolbar-profile-item text-black" activeClassName="active-navlink">
                                        <span className="flex">
                                        <AccountCircleOutlinedIcon  className={classes.listIcons} />
                                        <p className="ml-2 font-bold toolbar-menu-item-title self-center">Hesabım</p>
                                        </span>
                                    </NavLink>
                                    <NavLink  to="/" className="flex justify-start px-2 py-2 toolbar-profile-item text-black" activeClassName="active-navlink">
                                        <span className="flex">
                                        <AccountBalanceWalletOutlinedIcon  className={classes.listIcons} />
                                        <p className="ml-2 font-bold toolbar-menu-item-title self-center">Cüzdanım</p>
                                        </span>
                                    </NavLink>
                                    <NavLink  to="/" className="flex justify-start px-2 py-2 toolbar-profile-item text-black" activeClassName="active-navlink">
                                        <span className="flex">
                                        <CreditCardIcon  className={classes.listIcons} />
                                        <p className="ml-2 font-bold toolbar-menu-item-title self-center">Hediye Çeklerim</p>
                                        </span>
                                    </NavLink>
                                    <div className="bottom-indicator-collapse"></div>
                                    <NavLink  to="/" className="flex justify-start px-2 py-2 toolbar-profile-item text-black" activeClassName="active-navlink">
                                        <span className="flex h-8 flex justify-center">
                                        <p className="ml-2 font-bold toolbar-menu-item-title self-center">Çıkış Yap</p>
                                        </span>
                                    </NavLink>
                                </div>
                                :null
                            }

                        </span>
                    </div>
                    {/*<div>*/}
                    {/*    <IconButton*/}
                    {/*        className="text-white"*/}
                    {/*        aria-label="delete" key={"key"}*/}
                    {/*        onClick={() => {*/}
                    {/*            localStorage.clear();*/}
                    {/*            dispatch(Actions.setLoading(false));*/}
                    {/*            dispatch(Actions.setMessage(null, "success"));*/}
                    {/*            props.history.push('/login');*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <ExitToAppIcon className="text-white"/>*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                </div>
            </Toolbar>


        </AppBar>
    );
}

export default withRouter(ButtonAppBar);