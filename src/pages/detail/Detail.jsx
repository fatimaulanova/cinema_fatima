import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import tmdbApi from '../../config/config'
import apiConfig from '../../config/apiConfig'

import './detail.scss'
import CastList from './cast-list/CastList'
import VideoList from './video-list/VideoList'
import MovieList from '../../components/movieList/MovieList'
import useTmdb from '../../config/useTmdb'
import Loader from '../../components/loader/Loader'
import Button, {OutlineButton} from "../../components/buttons/Button";
import PropTypes from "prop-types";

const Detail = (props) => {
  const { category, id } = useParams()
  const [item, setItem] = useState({})

  const { detail, process } = useTmdb()

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await detail(category, id)
        setItem(res)
      } catch (err) {
        console.log(err)
      }
    }
    getDetail()
  }, [category, id])

  return (
    <>
      {process === 'loading' ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{item.title}</title>
            <meta content={item.title} description="Details" />
          </Helmet>
          <div
            className="detail__banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="detail-content__container container">
            <div
              className="detail__poster"
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  item.poster_path || item.backdrop_path
                )})`,
              }}
            >
            </div>
            <div className="detail__info">
              <h2 className="detail__title">{item.title}</h2>
              <div className="detail__genres">
                {item.genres
                  ? item.genres.map((genre) => (
                      <span key={genre.id}>{genre.name}</span>
                    ))
                  : null}
              </div>
              <p className="detail__overview">{item.overview}</p>
              <div className="btns">
                <OutlineButton className={'detail__btn'}>Add to watchlist</OutlineButton>
                <Button className={'detail__btn'}>Add to favourite</Button>
              </div>
              <h3 className="section__title">Cast</h3>
              <div className="cast mb-4">
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <VideoList id={id} />
            <section className="section">
              <h2 className="section__title mb-3">Similar</h2>
                <MovieList category={category}
                           type='similar'
                           id={item.id}/>
            </section>
          </div>
        </>
      )}
    </>
  )
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}


export default Detail
