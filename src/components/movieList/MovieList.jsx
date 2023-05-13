import React, {useState, useEffect} from 'react';
import {category} from "../../config/config";
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from "../movie-card/MovieCard";
import useTmdb from '../../config/useTmdb';

import 'swiper/scss'
import Loader from "../loader/Loader";

const MovieList = props => {
    const [items, setItems] = useState([]);

    const {getMoviesList, getTvList, similar, process} = useTmdb();

    useEffect( () => {
        const getList = async () => {
            try {
                let response = null;
                const params = {}
                if(props.type !== 'similar') {
                    switch(props.category) {
                        case category.movie:
                            response = await getMoviesList(props.type, {params})
                            break;
                        default:
                            response = await getTvList(props.type, {params})
                            break;
                    }
                }else {
                    response = await similar(props.category, props.id)
                }
                setItems(response.results)
            }catch(err) {
                console.log(err)
            }
        }
        getList()
    }, []);


    return (
        <div className='movie-list'>
            {process === 'loading' ? (
                <Loader/>
            ) : (
                <Swiper
                    breakpoints={{
                        322: {
                            width: 320,
                            slidesPerView: 1
                        },
                        640: {
                            width: 640,
                            slidesPerView: 3,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                    }}
                    slidesPerView={'auto'}
                    grabCursor={true}
                    spaceBetween={10}
                    loop={true}>
                    {
                        items.map((item, i) => (
                            <SwiperSlide key={i}>
                                <MovieCard item={item}
                                           category={props.category}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            )}
        </div>

    );
};

export default MovieList;
