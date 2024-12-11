import './main-content.css'
import React, { useState , useEffect} from 'react';
import DynamicRender from './DynamicRenderer'

export default function Search() {
    const [showimage, setshowimage] = useState(0);
    const [search, setsearch] = useState(''); 
    const FirstSection1st = "../../assets/blurred-images/spell-bound-banner.jpg";
    const FirstSection2nd = "../../assets/blurred-images/breakingbad-banner.jpg";
    const FirstSection3rd = "../../assets/blurred-images/strangerthings-banner.jpg";
    const FirstSection4th = "../../assets/blurred-images/inception-banner.jpg";

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

    function StoreData(e) {
        setsearch(e.target.value);
    }

    return (
        <>
        <div
            style={{
                backgroundImage: `url(${background_images[showimage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'background-image 0.5s ease-in-out',
                height: '100%',
                minHeight: '100vh',
            }}
        >
            <section className='search-section'>
                <section className="first-home-section">
                    <div className="banner search-banner">
                        <div className={`item ${showimage === 0 ? 'visible' : 'hidden'}`}>
                            <img id="1st-banner" src="../../assets/images/spell-bound-banner.jpg" alt="" />
                        </div>

                        <div className={`item ${showimage === 1 ? 'visible' : 'hidden'}`}>
                            <img id="2st-banner" src="../../assets/images/breakingbad-banner.jpg" alt="" />
                        </div>

                        <div className={`item ${showimage === 2 ? 'visible' : 'hidden'}`}>
                            <img id="3st-banner" src="../../assets/images/strangerthings-banner.jpg" alt="" />
                        </div>

                        <div className={`item ${showimage === 3 ? 'visible' : 'hidden'}`}>
                            <img id="4st-banner" src="../../assets/images/inception-banner.jpg" alt="" />
                        </div>
                    </div>
                </section>
                <section className='search'>
                    <h1>Search Movies</h1>
                    <input type="text" value={search} onChange={StoreData}/>
                </section>
            {search != '' ? (
                <div className='searched-info'>
                    <DynamicRender title={"Search result"} filter={(card) => card.name.toLowerCase().includes(search.toLowerCase())} useSlider={false}/>
                </div>
        ):(
            <div className='search-h1'>
                <h1>search something!</h1>
            </div>
        )}
        </section>
        </div>
        </>
    )
}