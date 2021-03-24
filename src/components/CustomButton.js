import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from "@material-ui/icons/Close";


export default function CustomizedButtons({primaryColor, hoverColor, title, onClick, endIcon, padding, borderRadius, paddingTB, Height, disabled, fontColor, borderColor, fitContent}) {

    const BootstrapButton = withStyles({
        root: {
            boxShadow: 'none',
            textTransform: 'none',
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#0063cc',
            borderColor: '#0063cc',
            fontFamily: [
                'Red Hat Display',
                'source-code-pro',
                'Menlo', 'Monaco', 'Consolas', 'Courier New',
                'monospace',
            ].join(','),
            '&:hover': {
                backgroundColor: '#0069d9',
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        },
    })(Button);

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(primaryColor),
            backgroundColor: primaryColor ? primaryColor : "#da291c",
            textTransform: 'none',
            paddingRight: padding ? padding : 12,
            paddingLeft:  padding ? padding : 12,
            paddingTop: paddingTB ? paddingTB: 8,
            paddingBottom: paddingTB ? paddingTB: 8,
            borderRadius: borderRadius ? borderRadius : 8,
            minWidth: 58,
            fontColor: "black",
            whiteSpace: 'nowrap',
            fontFamily: [
                'Red Hat Display',
                'source-code-pro',
                'Menlo', 'Monaco', 'Consolas', 'Courier New',
                'monospace',
            ].join(','),
            '&:hover': {
                backgroundColor: hoverColor ? hoverColor : "#da291c",
            },
        },
    }))(Button);

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
            height: Height ? Height : "inherit",
        },
    }));

    const theme = createMuiTheme({
        palette: {
            primary: primaryColor[500],
        },
    });


    const classes = useStyles();

    return (
        <div className="flex justify-center" style={{"width": fitContent ? "fit-content" : null}}>
            <ColorButton onClick={onClick} variant="contained" color="primary" style={{outline: 0, borderStyle: "solid", borderWidth: 2, borderColor: borderColor? borderColor: primaryColor, }} className={classes.margin} disabled={disabled}
                         endIcon={endIcon? endIcon : null}>
                <p className="font-bold" style={{color: fontColor ? fontColor : "white"}}>{title}</p>
            </ColorButton>
        </div>
    );
}