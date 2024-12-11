import './main-content.css'
import cards_data from '../../assets/cards/cards_data'
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useMovieContext } from '../useContext/MovieContext';
const FirstSection1st = "../../assets/blurred-images/first-section.jpg";

export default function DetailedMovieInfo() {
    const {selectedMovie} = useMovieContext();
    const location = useLocation();
    const [showVideo, setShowVideo] = useState(false);

    function HandleShowVideo() {
        setShowVideo(!showVideo);
    }

    return (
        <>
        <section className='detailed-movies'
        style={{
            backgroundImage: `url(${selectedMovie.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
        <div className='blur'>
        <section className='detailed-movies-page'>
            <div className={`banner ${showVideo ? 'hidden' : 'visible'}`}>
                <img src={selectedMovie.banner} alt="" />
            </div>
            <div className={`banner iframe-container ${showVideo ? 'visible' : 'hidden'}`}>
            <iframe width="560" height="315" src={selectedMovie.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='banner-text letter-spacing'>
                <div className={`${showVideo ? 'hidden' : 'visible'}`}>
                <img src={selectedMovie.logo} alt="" />
                </div>
                <br /><br />
                <div className='banner-button'>
                <button className={`${showVideo ? 'hidden' : 'visible'}`} onClick={() => HandleShowVideo()}>Watch Now</button>
                </div>
            </div>
        </section>
        <br /><br />
        <section className='banner-button stop-watching'>
                <button className={`${showVideo ? 'visible' : 'hidden'}`} onClick={() => HandleShowVideo()}>Stop Watching</button>
        </section>
        <br />
        <section className='detail'>
        <div className="movie-info-text detailed-movie-info">
                <h1>{selectedMovie.name}</h1>
                <br />
                <ul className='movie-genre'>
                    <li>{selectedMovie.released_year}</li>
                    <li>{selectedMovie.age_restriction}</li>
                    <li>{selectedMovie.genre}</li>
                </ul>
                <br />
                <p> <span>About: </span>{selectedMovie.about}</p>
                <br />
                <p> <span>Starring:</span> {selectedMovie.starring}</p>
           </div>
        </section>
        </div>
        </section>
        </>
    )
}