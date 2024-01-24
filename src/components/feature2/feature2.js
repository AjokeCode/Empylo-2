import { useRef, useEffect } from 'react';
import '../features/features.css';
import img1 from './Wavy_Bus-05_Single-11 1.svg';
import img2 from './4548366 1.svg';
import img3 from './3d-casual-life-data-analysis 1 (10).svg';
import img4 from './3d-casual-life-data-analysis 1 (11).svg';
import img5 from './5193104 1.svg';
import img6 from './Wavy_Bus-22_Single-09 2.svg';

const Feature2 =()=>{
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
        <div className="features" ref={sectionRef}>
            <h1 className='features-header'>
                KEY FEATURES
            </h1>
            <div className="features-divs">
                <div className="feature-div">
                    <h1 className='features-header1'>Data-Driven Decisions</h1>
                    <p className='features-text'>
                    Our interactive dashboards facilitates easy monitoring of campaigns 
                    and provide clear recommendations for strategic decision-making.
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Interactive Dashboard</h1>
                    <p className='features-text'>
                    We provide a visually appealing and user-friendly dashboard for monitoring 
                    campaign progress, analytics, and insights accessible to admins.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>2FA and Data Security</h1>
                    <p className='features-text'>
                    Intuitive and secure login. 
                    We implement two-factor authentication (2FA) 
                    and robust security measures to protect your privacy.
                    </p>
                    <img src={img3} alt='img' className='features-img'/>
                </div>




                <div className="feature-div">
                    <h1 className='features-header1'>Role Based Features</h1>
                    <p className='features-text'>
                    We provide distinct interfaces for super-admins, 
                    admins, and regular users, ensuring clarity in permissions and capabilities for each role.

                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Error Handling & System Stability</h1>
                    <p className='features-text'>
                    Our comprehensive error handling interfaces  
                    prevent system crashes and data loss, including  
                    a retry logic for operational or transient errors to enhance system stability.

                    </p>
                    <img src={img5} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Campaign Management</h1>
                    <p className='features-text'>
                    Our UI allows admins to easily add colleagues, create audiences, 
                    and design surveys. It provides a smooth process for targeting 
                    surveys to specific audiences and analyzing results.
                    </p>
                    <img src={img6} alt='img' className='features-img'/>
                </div>

            </div>
        </div>
    )
}
export default Feature2;