import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieInfo({ data, handleWatchNow, ChildToParent }) {
  return (
    data && (
      <section className='movie-info-wrapper' onClick={() => ChildToParent()}>
        <div className='movie-info-blur'>
          <div className='movie-info' onClick={(e) => e.stopPropagation()}>
            <div className='movie-info-img'>
              <img src={data.image} alt={data.name} />
            </div>
            <div className='movie-info-text'>
              <h1 className='letter-spacing'>{data.name}</h1>
              <br />
              <ul className='movie-genre'>
                <li>{data.released_year}</li>
                <li>{data.age_restriction}</li>
                <li>Action</li>
                <li>{data.type}</li>
              </ul>
              <br />
              <p>{data.about}</p>
            </div>
            <br /><br />
            <div className='watch-now'>
              <Link to={'/info'}>
                <button onClick={(e) => { e.stopPropagation(); handleWatchNow(data); }}>
                  Watch Now
                </button>
              </Link> 
            </div>
          </div>
        </div> 
      </section>  
    )
  );
};
