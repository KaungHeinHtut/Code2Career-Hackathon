import React,{ useState, useEffect, useRef, useCallback } from 'react'
import './main-content.css'
import { Link, useNavigate } from 'react-router-dom';
import DynamicRenderer from './DynamicRenderer.jsx';

export default function Home() {
    const [showimage, setshowimage] = useState(0);
    const [direction, setdirection] =useState('');

    const FirstSection1st = "../../assets/blurred-images/first-section.jpg";
    const FirstSection2nd = "../../assets/blurred-images/Arcane.jpg";
    const FirstSection3rd = "../../assets/blurred-images/bad-boys-ride-or-die.jpg";

    const background_images = [
        FirstSection1st,
        FirstSection2nd,
        FirstSection3rd
    ]

    function handleRightClick() {
        setshowimage((prev) => (prev + 1) % 3 );
        setdirection('right');
    };

    function HandleLeftClick() {
        setshowimage((prev) => (prev - 1 + 3) % 3 );
        setdirection('left');
    };

    return (
        <>
    <div
        style={{
                backgroundImage: `url(${background_images[showimage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'background-image 0.5s ease-in-out',
                }}
                >
        <section className="first-home-section">
            <div className='banner'>
                <div className={`item ${showimage === 0 ? 'visible' : 'hidden'} ${direction === "right" ? "go-right" : "go-left"}`}>
                    <img id='1st-banner' src="../../assets/images/home-first-section.PNG" alt="" />
                    <div className='banner-title'>
                        <h1 className='letter-spacing'>Endless movies, TV shows <br /> and more at JFlix</h1>
                    </div>
                </div>
                <div className={`item ${showimage === 1 ? 'visible' : 'hidden'} ${direction === "right" ? "go-right" : "go-left"}`}>
                    <img id='2st-banner' src="../../assets/images/Arcane.jpg" alt="" />
                    <div className='smaller-banner-title'>
                        <p className='letter-spacing'>Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war <br /> 
                        between magic technologies and clashing convictions.</p>
                    </div>
                </div>
                <div className={`item ${showimage === 2 ? 'visible' : 'hidden'} ${direction === "right" ? "go-right" : "go-left"}`}>
                    <img id='3st-banner' src="../../assets/images/bad-boys-ride-or-die.jpg" alt="" />
                    <div className='smaller-banner-title'>
                        <p className='letter-spacing'>When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus 
                        <br /> go rogue to expose a conspiracy — and clear their own names.</p>
                    </div>
                </div> 
            </div>
            <div className='buttons'>
                <button id='left' onClick={HandleLeftClick}>{"<"}</button>
                <button id='right' onClick={handleRightClick}>{">"}</button>
            </div> 
        </section>
        <br />
            <DynamicRenderer title={"Trending now"} filter={(item) => item.popularity === "high"} useSlider={true} />
            <br />
            <DynamicRenderer title={"Trending TV-Shows"} filter={(item) => item.type === "TV-Series" && item.popularity === "high"}  useSlider={true} />
            <br />
    </div>
    </>
    )
}