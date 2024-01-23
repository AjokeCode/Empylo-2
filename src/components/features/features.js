import img1 from './3d-casual-life-data-analysis 1 (5).svg';
import img2 from './3d-casual-life-data-analysis 1 (6).svg';
import img3 from './3d-casual-life-data-analysis 1 (7).svg';
import img4 from './3d-casual-life-data-analysis 1 (8).svg';
import img5 from './3d-casual-life-data-analysis 1 (9).svg';
import './features.css';
import { useRef, useEffect } from 'react';

const Features =()=>{
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
                    <h1 className='features-header1'>Dashboard with well-being scores</h1>
                    <p className='features-text'>
                    Our intuitive dashboard displays your well-being score and 
                    highlights areas that need attention, such as sleep, 
                    mood, motivation, and more.
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Self-development & Group Activities</h1>
                    <p className='features-text'>
                    Engage in self-awareness, mental health exercises, 
                    team building activities, and affirmations. Both auto-generated and user-led activities.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>2FA and Data Security</h1>
                    <p className='features-text'>
                    Your well-being data is safe with us. We implement two-factor 
                    authentication (2FA) and robust security measures to protect your privacy.
                    </p>
                    <img src={img3} alt='img' className='features-img'/>
                </div>




                <div className="feature-div">
                    <h1 className='features-header1'>Instant Messaging and Voice Calls</h1>
                    <p className='features-text'>
                    Stay connected with your circles through text, voice notes, and calls. 
                    Our integration with WhatsApp makes communication seamless.
                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Admin & Moderator Roles</h1>
                    <p className='features-text'>
                    Each circle has a dedicated admin or moderator 
                    who manages members, sets questionnaire frequencies, and sends reminders.
                    </p>
                    <img src={img5} alt='img' className='features-img'/>
                </div>

            </div>
        </div>
    )
}
export default Features;