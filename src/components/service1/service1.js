import './service1.css';
import img1 from './Rectangle 5.svg';
import { useRef, useEffect } from 'react';


const Service1 = ()=>{
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
        <div className="service1" ref={sectionRef}>
            <div className='service1-1'>
                <img src={img1} alt='img' className='service-img'/>
            </div>
            <div className='service1-2'>
                <h1 className='service-header'>Peer Support</h1>
                <p className='service-text'>
                We provide a data-powered community-based emotional support approach to combat loneliness and improve health. 
                By creating ‘Circles’ with friends, family, colleagues, 
                the app aims to reduce social isolation and the associated physical and mental health risk.
                </p>
            </div>
        </div>
    )
}
export default Service1;