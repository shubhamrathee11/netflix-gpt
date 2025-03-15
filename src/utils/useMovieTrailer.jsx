import React from 'react';
import { API_Options } from './constants';
import {addTrailerVideo} from './movieSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieID) => {

    const dispatch = useDispatch();

    //fetch trailer video and updating the store with trailer video data

    const getMovieVideos = async () =>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+ movieID +'/videos?language=en-US',
            API_Options
      );
      const json = await data.json(); 
      console.log(json);
  
      const filterData = json.results.filter((video)=>video.type == "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
      getMovieVideos()
    },[]);

  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;