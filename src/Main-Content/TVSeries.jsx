import './main-content.css'
import DynamicRender from './DynamicRenderer'
import { useState, useEffect } from 'react';

export default function TVSeries() {
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

    return (
        <>
        <section className='container'
         style={{
            backgroundImage: `url(${background_images[showimage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out',
        }}>
            <div>
        <DynamicRender title={"TV Shows"} filter={(item)=> item.type === "TV-Series"} useSlider={false}/>
            </div>
        </section>
        </>
    )
}