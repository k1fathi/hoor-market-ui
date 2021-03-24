import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../store/actions";
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        background: "#303030",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
}));

const MiniDrawer =  function (props) {
    const classes = useStyles();
    const theme = useTheme();
    const [userRoles, setUserRoles] = useState(null);
    const dispatch = useDispatch();
    const {isNavBarOpen} = useSelector(state => state.settings.layout);



    const handleDrawerClose = () => {
        dispatch(Actions.closeNavBar());
    };

    const menuItems = [
        {
            name: "Home",
            path: "/",
            icon: <HomeIcon/>
        },
        {
            name: "page1",
            path: "/page1",
            icon: <PeopleAltIcon />,
            role: 'EmployeeManagement'
        }
    ];



    const user = ["Administrator"];

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isNavBarOpen,
                [classes.drawerClose]: !isNavBarOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isNavBarOpen,
                    [classes.drawerClose]: !isNavBarOpen,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon style={{color: "white"}} fontSize="large"/> : <ChevronLeftIcon style={{color: "white"}} fontSize="large"/>}
                </IconButton>
            </div>
            <Divider />
            <List>
                {user  && menuItems.map((item, index) => {
                    if(!item.role){
                        return(
                            <NavLink
                                to={item.path}
                                className="flex inline-block text-black hover:bg-gray-200 justify-center items-center"
                                activeClassName="flex inline-block bg-gray-400 text-gray-800 justify-center items-center"
                            >
                                <div className="p-2">
                                    {item.icon}
                                </div>
                                {
                                    isNavBarOpen && (
                                        <ListItemText primary={item.name} />
                                    )
                                }
                            </NavLink>)
                    }
                    if (!item || user.find(role => role === item.role) || user.find(role => role === 'Administrator')) {
                        return (
                            <NavLink
                                to={item.path}
                                className="flex inline-block text-black hover:bg-gray-200 justify-center items-center"
                                activeClassName="flex inline-block bg-gray-400 text-gray-800 justify-center items-center"
                            >
                                <div className="p-2">
                                    {item.icon}
                                </div>
                                {
                                    isNavBarOpen && (
                                        <ListItemText primary={item.name} />
                                    )
                                }
                            </NavLink>
                        )
                    }
                })}
            </List>
        </Drawer>
    );
}

export default withRouter(MiniDrawer);