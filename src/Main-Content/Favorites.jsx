import React, { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../useContext/FavoritesContext';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../useContext/MovieContext';

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext);
    const { setSelectedMovie } = useMovieContext();
    const FirstSection1st = "../../assets/blurred-images/spell-bound-banner.jpg";
    const FirstSection2nd = "../../assets/blurred-images/breakingbad-banner.jpg";
    const FirstSection3rd = "../../assets/blurred-images/strangerthings-banner.jpg";
    const FirstSection4th = "../../assets/blurred-images/inception-banner.jpg";
    const [showimage, setshowimage] = useState(0);

    const background_images = [
        FirstSection1st,
        FirstSection2nd,
        FirstSection3rd,
        FirstSection4th
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setshowimage((prev) => (prev + 1) % 4); 
        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    const handleWatchNow = (movie) => {
      setSelectedMovie(movie);
    };

  return (
    <section className="container"
    style={{ 
        backgroundImage: `url(${background_images[showimage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
    }}>
      <h1 className='letter-spacing global-h1'>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className='grid-view'>
          {favorites.map((movie) => (
            <div key={movie.id} className='grid-view-img'>
              <Link to={'/info'}>
                <img src={movie.image} alt={movie.name} onClick={() => handleWatchNow(movie)} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className='fav-p'>
        <p>You haven't added any favorites yet!</p>
        </div>
      )}
    </section>
  );
}


