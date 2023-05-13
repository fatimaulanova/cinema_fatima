import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../../config/config'
import apiConfig from '../../../config/apiConfig'
import useTmdb from '../../../config/useTmdb'

import './cast-list.scss'

const CastList = (props) => {
  const { category } = useParams()
  const [cast, setCast] = useState([])

  const { credits } = useTmdb()

  useEffect(() => {
    const getCast = async () => {
      try {
        const res = await credits(category, props.id)
        setCast(res.cast.slice(0, 10))
      } catch (err) {
        console.log(err)
      }
    }
    getCast()
  }, [category, props.id])

  return (
    <>
      {cast.map((item) => (
        <div key={item.id} className="cast__item">
          <div
            className="cast__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="cast__name">{item.name} as</p>
          <span>{item.character}</span>
        </div>
      ))}
    </>
  )
}

export default CastList
