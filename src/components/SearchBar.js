import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: '12px',
        border: "solid 1px white",
        backgroundColor: "#07A0DA",
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        color: "white",
        padding: '4px 8px',
        fontSize: "small"
    },
    divider: {
        color: "white",
        height: 22,
        margin: 4,
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const [input, setInput] = useState("");

    function clickSearchEvent(event) {
        event.preventDefault();
        console.log("input", input);
    }

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Marketde ara"
                onChange={(event) => setInput(event.target.value)}
                inputProps={{ 'aria-label': 'search in market' }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={(event ) => clickSearchEvent(event)}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}