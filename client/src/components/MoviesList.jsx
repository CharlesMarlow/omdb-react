import React from 'react';
import axios from "axios";
import MovieCard from './MovieCard';
import { connect } from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
    },
    paper: {
        height: 140,
        width: 100,
    },
}));

const api = 'http://www.omdbapi.com/?s=space&type=movie&y=2001&apikey=9f01e2ba';


const MoviesList = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState([]);
    const fetchMovies = () => {
        axios.get(api).then((data) => {
            console.log('===>>>', data.data.Search);
            setMovies(data.data.Search)
        });
    }

    React.useEffect(() => {
        fetchMovies()
    }, []);

    console.log('MOVIES', Object.values(movies));

    return (
        <div className={classes.container}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {movies.map((movie, index) => (
                            <Grid key={index} item>
                                <MovieCard  movie={movie} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MoviesList