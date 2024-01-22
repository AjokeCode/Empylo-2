import './partner.css';
import img1 from './Union.svg';
import img2 from './close-up-attractive-carefree-young-woman-sitting-floor 1.svg';
import { useRef, useEffect } from 'react';

const Partner = ()=>{
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
        <div className='partner' ref={sectionRef}>
            <div className='partner-container'>
                <div className='partner-1'>
                    <div className='partner-1-div'>
                        <h1 className='partner-1-header'>WHO WE SERVE</h1>
                        <p className='partner-1-text'>
                            We partner with individuals, employers and healthcare providers
                            to impact people positively.
                        </p>
                    </div>
                    <img src={img1} alt='img'className='partner-1-img'/>
                </div>
                <div className='partner-2'>
                <img src= {img2} alt='img' className='partner-2-img'/>
                <div className='partner-2-div'>
                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>1</span> Individuals</h1>
                        <p className='partner-2-div-1-text'>
                        For anyone wanting to feel more connected and improve their health outcomes, 
                        together with their loved ones.
                        </p>
                    </div>

                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>2</span> Organisations</h1>
                        <p className='partner-2-div-1-text'>
                        For employers, insurers, non-profits, and communities to help you to 
                        improve your people's connectivity and 
                        wellbeing outcomes, whilst driving key organisational outcomes.
                        </p>
                    </div>

                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>3</span> Healthcare</h1>
                        <p className='partner-2-div-1-text'>
                        For primary healthcare services wanting to harness technology and 
                        innovation to enhance your social prescribing offering to improve patient outcomes 
                        and self-management, whilst reducing preventable costs and referrals to secondary care services.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Partner;