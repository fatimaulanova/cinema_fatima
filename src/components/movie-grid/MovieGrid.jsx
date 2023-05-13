import { useEffect, useState } from 'react'

import './movie-grid.scss'
import { useParams } from 'react-router-dom'
import { category, movieType, tvType } from '../../config/config'
import MovieCard from '../movie-card/MovieCard'
import { OutlineButton } from '../buttons/Button'
import MovieSearch from '../movie-search/MoveSearch'
import useTmdb from '../../config/useTmdb'
import Loader from '../loader/Loader'

const MovieGrid = (props) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { keyword } = useParams()

  const { getMoviesList, getTvList, search, process } = useTmdb()

  useEffect(() => {
    const getList = async () => {
      try {
        let response
        if (keyword === undefined) {
          switch (props.category) {
            case category.movie:
              response = await getMoviesList(movieType.upcoming,  { params: {} })
              break
            default:
              response = await getTvList(tvType.popular, { params: {} })
              break
          }
        } else {
          const params = {
            query: keyword,
          }
          response = await search(props.category, { params })
        }
        setItems(response.results)
        setTotalPages(response.total_pages)
      } catch (err) {
        console.log(err)
      }
    }
    getList()
  }, [props.category, keyword])

  useEffect(() => {
    const getMoreList = async () => {
      let response
      if (keyword === undefined) {

        const params = { page: page + 1 }
        switch (props.category) {
          case category.movie:
            response = await getMoviesList(movieType.upcoming, {
              params,
            })
            break
          default:
            response = await getTvList(tvType.popular, { params })
            break
        }
      } else {
        const params = {
          page: page + 1,
          query: keyword,
        }
        response = await search(props.category, { params })
      }
      setItems((prev) => [...prev, ...response.results])
    }
    getMoreList()
  }, [page])



  return (
    <>
      {process === 'loading' ? (
        <Loader />
      ) : (
        <div className="movie-grid mb-4">
          <div className="container">
            <MovieSearch keyword={keyword} category={props.category} />
          </div>
          <div className="movie-grid__container container">
            {items.map((item, i) => (
              <MovieCard item={item} key={item.id} category={props.category} />
            ))}
          </div>
          {page < totalPages && (
            <div className="movie-grid__loadmore">
              <OutlineButton
                className={'small'}
                onClick={() => setPage((page) => page + 1)}
              >
                Load more
              </OutlineButton>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default MovieGrid
