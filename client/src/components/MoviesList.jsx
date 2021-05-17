import React from 'react';
import MovieCard from './MovieCard';
import {makeStyles} from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { fetchMovies } from "../shared/api";

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

const MoviesList = ({ movies, setMovies }) => {
    const classes = useStyles();

    const fetchMoviesLocal = async () => {
        return fetchMovies();
    }

    React.useEffect(() => {
        fetchMoviesLocal().then((data) => setMovies(data.data))
    }, []);

    return (
        <div className={classes.container}>
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={6}>
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