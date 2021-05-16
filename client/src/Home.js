import React from "react";
import Box from "@material-ui/core/Box";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
            <Box
                display="flex"
                justifyContent="space-around"
                alignItems="flex-start"
                p={2}
                width="100%"
            >
                <section>
                    <Search />
                    <MoviesList />
                </section>
            </Box>
        </React.Fragment>
    );
};

export default Home;