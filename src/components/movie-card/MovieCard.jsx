import React from 'react';
import {Link} from "react-router-dom";

import './movie-card.scss';
import apiConfig from "../../config/apiConfig";
import Button from "../buttons/Button";
import {category} from "../../config/config";
import favBtn from '../../img/favourite.svg';

const MovieCard = props => {
    const item = props.item;
    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    const link = `/${category[props.category]}/${item.id}`

    let style = {
        backgroundColor: item.vote_average < 7 && item.vote_average > 6 ? 'grey' : item.vote_average < 6 ? 'red' : 'rgba(69, 156, 58, 0.76)'
    }

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${background})`}}>
                {item.vote_average > 0 && <div style={style} className="vote-average">{item.vote_average.toFixed(1)}</div>}
                <Button>
                    More
                </Button>
            </div>
            <h2 className='card__title'>{item.title || item.name}</h2>
        </Link>
    );
};

export default MovieCard;
