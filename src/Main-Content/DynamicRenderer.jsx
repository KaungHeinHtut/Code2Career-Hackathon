import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../useContext/FavoritesContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cards from '../../assets/cards/cards_data.jsx';
import './main-content.css';
import { useMovieContext } from '../useContext/MovieContext';

export default function DynamicRender(props) { 
  const [data, setData] = useState(null);
  const { setSelectedMovie } = useMovieContext();
  const newRef = useRef(null);
  
  const { favorites, toggleFavorite } = useContext(FavoritesContext); 

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(3),
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const FilterCards = cards.filter(props.filter);

  const ChildToParent = (value) => {
    setData(value);
  };

  const handleWatchNow = (movie) => {
    setSelectedMovie(movie);
  };

  const handleOutsideClick = useCallback((e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
        setData(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <>
      <section className='main-section'>
        <h1 className='letter-spacing global-h1'>{props.title}</h1>
        {props.useSlider ? (
          <div className='trending-movies'>
            <Slider {...settings}>
              {FilterCards.map((card) => (
                <div
                  key={card.id}
                  className='trending-movies-img'
                  onClick={() => ChildToParent(card)}
                >
                  <img src={card.image} alt={card.name} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className='grid-view'>
            {FilterCards.map((card) => (
              <div key={card.id} className='grid-view-img' onClick={() => ChildToParent(card)}>
                <img src={card.image} alt={card.name} />
              </div>
            ))}
          </div>
        )}
      </section>
      <div>
        {data && (
          <section className='movie-info-wrapper' onClick={() => ChildToParent()}>
            <div className='movie-info-blur'>
              <div className='movie-info' ref={newRef} onClick={(e) => e.stopPropagation()}>
                <div className='movie-info-img'> 
                  <img src={data.image} alt={data.name} />
                </div>
                <div className='movie-info-text'>
                  <h1 className='letter-spacing'>{data.name}</h1>
                  <br />
                  <ul className='movie-genre'>
                    <li>{data.released_year}</li>
                    <li>{data.age_restriction}</li>
                    <li>{data.genre}</li>
                    <li>{data.type}</li>
                  </ul>
                  <br />
                  <p>{data.about}</p>
                </div>
                <br /><br />
                <div className='watch-now'>
                  <Link to={'/info'} onClick={(e) => { e.stopPropagation(); handleWatchNow(data); }}>
                      Watch Now
                  </Link> 
                  <button className='favorite-btn' onClick={(e) => { e.stopPropagation();  toggleFavorite(data); }}>
                    {favorites.some((fav) => fav.id === data.id) ? "Unfavorite" : "Favorite"}
                  </button>
                </div>
              </div>
            </div> 
          </section>  
        )} 
      </div>
    </>
  );
}