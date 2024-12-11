import React,{ useState, useEffect, useRef, useCallback } from 'react'
import './main-content.css'
import DynamicRender from './DynamicRenderer';

export default function MovieDetail() {
    const [data, setData] = useState(null);
    const newRef = useRef(null);
    
    const childToParent = (value) => {
        setData(value);
    }

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
    {data && (
    <section className='movie-info-wrapper' onClick={() => childToParent()}>
     <div className='movie-info-blur'>
        <div className='movie-info' ref={newRef} onClick={(e)=> e.stopPropagation()}>
            <div className='movie-info-img'> 
                <img src={data.image} />
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
                <Link>Watch Now</Link> 
           </div>
        </div>
    </div> 
    </section>  
    )}
    <DynamicRender SelectData={childToParent}/>
        </>
    )
}