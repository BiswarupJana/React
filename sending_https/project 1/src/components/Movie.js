import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <a href={props.url}>{props.url}</a>
            <p>{props.openingText}</p>
        </li>
    );
};

export default Movie;