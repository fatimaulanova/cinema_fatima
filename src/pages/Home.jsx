import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import HeroSlide from '../components/hero-slide/HeroSlide'
import { OutlineButton } from '../components/buttons/Button'
import MovieList from '../components/movieList/MovieList'
import { category, movieType, tvType } from '../config/config'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta content='Home' description='Home'/>
      </Helmet>
      <HeroSlide />
      <div className="container">
        <div className="section mb-4">
          <div className="section__header mb-4">
            <h2 className="section__title">Trending movies</h2>
            <Link to="/movie">
              <OutlineButton className={'btn small'}>View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-4">
          <div className="section__header mb-4">
            <h2 className="section__title">Top Rated movies</h2>
            <Link to="/movie">
              <OutlineButton className={'btn small'}>View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-4">
          <div className="section__header mb-4">
            <h2 className="section__title">Popular TV Series</h2>
            <Link to="/tv">
              <OutlineButton className={'btn small'}>View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-4">
          <div className="section__header mb-4">
            <h2 className="section__title">Top Rated TV Series</h2>
            <Link to="/tv">
              <OutlineButton className={'btn small'}>View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home
