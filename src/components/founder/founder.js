import img1 from '../git/Dots component (2).svg';
import img2 from './Rectangle 17.svg';
import img3 from '../footer/img4.png';
import img4 from '../footer/img3.png';
import './founder.css';
import { useRef, useEffect } from 'react';

const Founder =()=>{
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
    return(
        <div className="founder" ref={sectionRef}>
            <h1 className='founder-header'>
                Our Founder
            </h1>
            <div className='founder-2'>
                <img src={img2} alt='img' className='founder-2-img'/>
                <button className='founder-btn2'>
                        Gracious Musariri<br/> Founder and CEO
                    </button>
                <div className='founder-2-div'>
                    <p className='founder-2-text'>
                    Gracious is a registered mental health practitioner with over 10 years 
                    experience working in the NHS. She is also a Global Health Advocate on a 
                    mission to address the pressing global health challenges through innovative 
                    and effective digital solutions.
                    </p>
                    <div className='founder-imgs'>
                        <img src={img3} alt='img' className='founder-d-img'/>
                        <img src={img4} alt='img' className='founder-d-img'/>
                    </div>
                    <button className='founder-btn'>
                        Gracious Musariri<br/> Founder and CEO
                    </button>
                </div>
            </div>
            <div>
            <img src={img1} alt='img' className='founder-img'/>
            </div>
        </div>
    )
}
export default Founder