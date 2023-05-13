import {useState, useEffect, useRef} from 'react';

import './video.scss';
import {useParams} from "react-router-dom";
import tmdbApi from "../../../config/config";
import useTmdb from '../../../config/useTmdb';
import Video from "./Video";

const VideoList = props => {
    const [videos, setVideos] = useState([]);
    const {category} = useParams();

    const {getVideos} = useTmdb();

    useEffect(() => {
        const getVideosList = async () => {
            try {
                const res = await getVideos(category, props.id);
                setVideos(res.results.slice(3,10))
            }catch(e) {
                console.log(e)
            }
        }
        getVideosList()
    }, [category, props.id])

    // useEffect(() => {
    //     const getVideos = async () => {
    //         try {
    //             const res = await tmdbApi.getVideos(category, props.id);
    //             setVideos(res.data.results.slice(3,10))
    //         }catch(e) {
    //             throw Error(e)
    //         }
    //     }
    //     getVideos()
    // }, [category, props.id])

    return (
        <>
        <div className='videos mb-4'>
            {
                videos.map((item, i) => (
                    <Video key={i}
                           item={item}/>
                ))
            }
        </div>
        </>
    );
};



export default VideoList;
