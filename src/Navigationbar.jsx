import React from 'react'
import { Link } from 'react-router-dom';
import './navigation.css'
import search from '../assets/images/search.png';
import home from '../assets/images/home.png';

export default function Navigationbar() {
    return(
    <>
    <section className='navbar'>
        <ul className='nav desktop-nav'>
            <div className='first-nav'>
                <li><h1 className='letter-spacing'>JFlix</h1></li>
            </div>
            <div className='sec-nav'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/TVShows'}>TV-Series</Link></li>
                <li><Link to={'/Movies'}>Movies</Link></li>
            </div>
            <div className='third-nav'>
                <div className='search-icon'>
                    <Link to="/search" className='search-button'>
                    <img src={search} alt="" />
                    </Link>
                </div>
                <li><Link to="/favourite">Favorite</Link></li>
            </div>
        </ul>

        <ul className='nav smaller-nav'>
                <li><h1 className='letter-spacing'>JFlix</h1></li>
                <li><Link to={'/'} className='icon'>Home</Link></li>
                <li><Link to={'/TVShows'}>TV-Series</Link></li>
                <li><Link to={'/Movies'}>Movies</Link></li>
                    <Link to="/search" className='icon'>
                <div className='search-icon'><img src={search} alt="search" /></div>
                    </Link>
                <li><Link to="/favourite">Favorite</Link></li>
        </ul>
    </section>
    </>
    );
};