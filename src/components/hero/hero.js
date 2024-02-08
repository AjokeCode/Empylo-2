import './hero.css';
import img1 from './Vector (8).svg';
import img2 from './Vector (9).svg';
import img3 from './Vector (10).svg';
import img4 from './Vector 2 (1).svg';
import img5 from './Group 15.png';
import img6 from './iPhone 15 Pro.jpg';
import img8 from './Hero image.svg';
import img7 from './Vector 2 (2).svg';
import { useRef, useEffect } from 'react';

const Hero =()=>{
    const sectionRef = useRef(null);

    useEffect(() => {
      const revealcallbk = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section-hidden');
      };
  
      const revealSection = new IntersectionObserver(revealcallbk, {
        root: null,
        threshold: 0.15,
      });
  
      if (sectionRef.current) {
        revealSection.observe(sectionRef.current);
        sectionRef.current.classList.add('section-hidden');
      }}, [])
    
    return (
        <>
        <div className='hero' ref={sectionRef}>
            <div className='hero-left'>
                <h1 className='hero-left-header'>
                    Lorem ipsum dolor sit amet consectetur. 
                </h1>
                <img src={img4} alt='img'/>
                <p className='hero-left-text'>Lorem ipsum dolor sir amet consectetur, penatibus augue gravida est fermentum.
                    Et ornare ut auctur arcu amet. Elementus lorem vitae uma sollcitudin elit ut id. pretlum loe 
                    sed sagittis laculls in.
                </p>
                <button className='hero-btn'>&larr; Learn more</button>
                <div className='hero-left-div'>
                    <div className='hero-div-1'>
                        <img src={img1} alt='img'/>
                    <p className='hero-div-text'>Clinician led</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img2} alt='img'/>
                    <p className='hero-div-text'>Personalized</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img3} alt='img'/>
                    <p className='hero-div-text'>Experienced Team</p>
                    </div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={img5} alt='img' className='hero-right-img'/>
            </div>
            </div>


            <div className='hero-mobile'>
            <h1 className='hero-left-header-m'>
                    Lorem ipsum dolor sit amet consectetur. 
                </h1>
                <img src= {img7} alt='img' className='line'/>
                 <img src={img8} alt='img' className='mobile-img'/>
                <p className='hero-left-text-m'>Lorem ipsum dolor sir amet consectetur, penatibus augue gravida est fermentum.
                    Et ornare ut auctur arcu amet. Elementus lorem vitae uma sollcitudin elit ut id. pretlum loe 
                    sed sagittis laculls in.
                </p>
                <button className='hero-btn'>&larr; Learn more</button>
                <div className='hero-left-div'>
                    <div className='hero-div-1'>
                        <img src={img1} alt='img'/>
                    <p className='hero-div-text'>Clinician led</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img2} alt='img'/>
                    <p className='hero-div-text'>Personalized</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img3} alt='img'/>
                    <p className='hero-div-text'>Experienced Team</p>
                    </div>
                </div>
            </div>
            </> 
    )
}
export default Hero;