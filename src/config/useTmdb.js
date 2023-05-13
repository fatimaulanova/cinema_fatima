import { useCallback } from "react";
import { useRequest } from "../components/hooks/useRequest";
import apiConfig from "./apiConfig";
import { movieType, tvType, category } from "./config";

const useTmdb = () => {
  const {request, process, setProcess} = useRequest();

  const getMoviesList = async (type, params) => {
      const url = `${apiConfig.baseUrl}movie/${movieType[type]}?api_key=${apiConfig.apiKey}`;
      return await request(url, params);
  }

  const getTvList = async (type, params) => {
      const url = `${apiConfig.baseUrl}tv/${tvType[type]}?api_key=${apiConfig.apiKey}`
      return await request(url, params)
  }

  const getVideos = async (cate, id) => {
      const url = `${apiConfig.baseUrl}${category[cate]}/${id}/videos?api_key=${apiConfig.apiKey}`
      return await request(url, {params: {}})
  }

  const search = async (cate, params) => {
      const url = `${apiConfig.baseUrl}search/${category[cate]}?api_key=${apiConfig.apiKey}`
      return await request(url, params)
  }

  const detail = async (cate, id) => {
      const url = `${apiConfig.baseUrl}${category[cate]}/${id}?api_key=${apiConfig.apiKey}`
      return await request(url)
  }

  const credits = async (cate, id) => {
      const url = `${apiConfig.baseUrl}${category[cate]}/${id}/credits?api_key=${apiConfig.apiKey}`
      return await request(url, {params: {}})
  }

  const similar = async (cate, id) => {
      const url = `${apiConfig.baseUrl}${category[cate]}/${id}/similar?api_key=${apiConfig.apiKey}`
      return await request(url, {params: {}})
  }

  return {getMoviesList,
      getTvList,
      getVideos,
      search,
      detail,
      credits,
      similar,
      process,
      setProcess}
} 

export default useTmdb
