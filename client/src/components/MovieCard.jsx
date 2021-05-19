import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import notAvailable from '../assets/not_available.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        height: 650,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#dce0e6",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    director: {
        margin: theme.spacing(2),
    },
    content: {
        alignSelf: "center",
    }
}));

const MovieCard = ({ movie }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                title={movie.title}
            />
            <CardMedia
                className={classes.media}
                image={movie.poster === "N/A" ? notAvailable : movie.poster}
                title="poster"
            />
            <CardContent className={classes.content}>
                <Typography
                    variant="body1"
                    color="textPrimary"
                    component="h4"
                    gutterBottom
                >
                    {`Directed by ${movie.director}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {movie.plot !== "N/A" ? movie.plot : "Plot is unavailable"}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default MovieCard

