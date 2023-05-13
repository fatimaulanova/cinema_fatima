import { useState, useEffect } from 'react'
import  { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {  movieType } from '../../config/config'
import 'swiper/scss'
import './hero-slide.scss'

import TrailerModal from './trailerModal/TrailerModal'
import useTmdb from '../../config/useTmdb'
import Loader from '../loader/Loader'
import HeroSlideItem from "./HeroSlideItem";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([])
  const { getMoviesList, process, setProcess} = useTmdb()

  useEffect(() => {
    const getMovieList = () => {
      const params = { page: 1 }
      getMoviesList(movieType.popular, { params }).then((res) =>
        setMovieItems(res.results.slice(4, 7))
      )
    }
    getMovieList()
  }, [])


  return (
    <>
      {process === 'loading' ? (
        <Loader />
      ) : (
        <div className="hero-slide">
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {movieItems.map((item, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <HeroSlideItem
                    item={item}
                    className={`${isActive ? 'active' : ''}`}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          {movieItems.map((item, i) => (
            <TrailerModal item={item} key={i} active={false} />
          ))}
        </div>
      )}
    </>
  )
}



export default HeroSlide
