import { useState, useRef, useEffect} from 'react';
import './faqs.css';
import img1 from './ArrowCircleUpRight.png';
import img2 from './ArrowCircleDownRight (1).svg';
import img3 from '../git/Union.svg';
import img4 from './email-website-icon-email-png-88334ac4e37df5f11bdfcd467f36ed95 1.svg';
import img5 from './Vector 1.svg';
const FAQ = () => {
  const initialStates = Array(6).fill(false); 
  const [isClickArray, setIsClickArray] = useState(initialStates);

  const handleClick = (index) => {
    const newIsClickArray = [...isClickArray];
    newIsClickArray[index] = !newIsClickArray[index];
    setIsClickArray(newIsClickArray);
  };
  
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
    <div className='faq' ref={sectionRef}>
      <div className='faq-left'>
       <div className='faq-left-pad'>
          <h1 className='faq-left-pad-header'>FAQS</h1>
          <p className='faq-left-pad-text'>We have compiled a list of the most 
          common questions we get asked, if you have any other questions please feel free to reach out to us.</p>
        </div>
      </div>
      <div className='faq-right'>
        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(0)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
              {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <div>
          
          <p

           className={`${!isClickArray[0] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
           Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
           Etiam vitae porttitor neque morbi justo felis posuere ligula. 
           Scelerisque aliquam eu quisque in erat morbi mi.</p>
            </div>
        </div>

        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(1)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
            {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <p className={`${!isClickArray[1] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
          Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
          Etiam vitae porttitor neque morbi justo felis posuere ligula. 
          Scelerisque aliquam eu quisque in erat morbi mi. </p>
        </div>

        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(2)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
            {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <p className={`${!isClickArray[2] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
          Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
          Etiam vitae porttitor neque morbi justo felis posuere ligula. 
          Scelerisque aliquam eu quisque in erat morbi mi.</p>
        </div>

        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(3)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
            {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <p className={`${!isClickArray[3] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
          Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
          Etiam vitae porttitor neque morbi justo felis posuere ligula. 
          Scelerisque aliquam eu quisque in erat morbi mi.</p>
        </div>

        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(4)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
            {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <p className={`${!isClickArray[4] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
          Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
          Etiam vitae porttitor neque morbi justo felis posuere ligula. Scelerisque aliquam eu quisque in erat morbi mi.
          </p>
        </div>

        <div className='faq-right-pad'>
          <div className='faq-right-pad-headers' onClick={() => handleClick(5)}>
            <h1 className='faq-right-pad-header'>Lorem ipsum dolor sit amet consectetur?</h1>
            <i className='faq-right-pad-icon'>
            {
                !isClickArray[0] ? <img src={img2} alt='img'/>
                  : <img src={img1} alt='img' />
              }
            </i>
          </div>
          <p className={`${!isClickArray[5] ? 'none' : 'faq-right-pad-text'}`}>Lorem ipsum dolor sit amet consectetur. 
          Ultricies nisl cras eget neque rhoncus ultricies platea. Semper massa donec nulla donec id vel. 
          Etiam vitae porttitor neque morbi 
          justo felis posuere ligula. Scelerisque aliquam eu quisque in erat morbi mi.</p>
        </div>

      </div>
      <div>
      </div>
    </div>
     <div className='faq-flex'>
         <img src={img4} alt='img' className='faq-flex-img2'/>
         <p className='faq-flex-text'>
             Sign up to get exclusive access to our latest products and services before anyone else.
             </p>
         <div className='faq-flex-div-1'>
             <input placeholder='Enter your email' type='email' className='faq-flex-input'/>
             <button className='faq-flex-btn'>Subscribe</button>
         </div>
     
     
   </div>
   </>
  )
}

export default FAQ;