import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Open Movies Data Base
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;