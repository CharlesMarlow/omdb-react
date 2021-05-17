import React, { useState } from "react";
import { fetchMovies } from "../shared/api";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        height: 55,
    },
    wrapper: {
        display: "flex",
        alignSelf: "center",
    }
}));

const Search = ({ setMovies }) => {
    const classes = useStyles();
    const [term, setTerm] = useState("");

    const searchMovies = async term => {
        const filteredMovies = await fetchMovies(term);
        console.log('FILTERED', filteredMovies);
        setMovies(filteredMovies.data);
    };

    const onInputChange = async event => {
        setTerm(event.target.value);
    };

    return (
        <Grid
            container
            direction={"row"}
            wrap={"nowrap"}
            justify={"center"}
            alignItems={"center"}
            className={classes.wrapper}
        >
            <Grid item xs={1} />
            <Grid item xs={"auto"}>
                <TextField
                    id="outlined-textarea"
                    label="Search movies"
                    placeholder={"Search any movie..."}
                    value={term}
                    onChange={event => onInputChange(event)}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={1}>
                <Button
                    size={"large"}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => searchMovies(term)}
                >
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default Search;
