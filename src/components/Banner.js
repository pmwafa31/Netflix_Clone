import React, {useEffect, useState} from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instance'

function Banner() {
    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movie,setMovie] = useState([])

    const fetchData = async ()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)]);
    }

useEffect(()=>{
    fetchData()
},[])

function turncate(str,n){
  return str?.length>n?str?.substr(0,n-1)+'...':str
}

  return (
    <div className='banner'
     style={{
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:'cover'
        }}>
        <div className='banner_content'>
          <h1 className='banner_title'>{movie.name}</h1>
          <h3 className='banner_overview'>{movie.overview?.slice(0,150)}....</h3>
        </div>
    </div>
  )
}

export default Banner