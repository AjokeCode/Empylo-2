import './wwa.css';
import img1 from './Dots component.svg';
import img2 from './Dots component (1).svg';
import img3 from './Who we are images.svg';
import img4 from './Vector 5.svg';
const Wwa =()=>{
    return(
        <div className='wwa'>
            <img src={img2} alt='img' className='wwa-1-1-mobile'/>
            <div className='wwa-1'>
                <div className='wwa-1-left'>
                <h1 className='wwa-1-header'>WHO WE ARE</h1>
                <p className='wwa-1-text'>Data-driven, Digital Health Solutions</p>
                </div>
                <img src={img1} alt='img' className='wwa-1-img'/>
            </div>
            <div className='wwa-2'>
                <img className='wwa-1-2' src={img3} alt='img'/>
                <div className='wwa-1-3'>
                    <p className='wwa-1-3-text'>
                        Empylo Health is a technology and consulting company that provides
                        solutions that address global health challenges and their associated risks.
                    </p>
                    <p className='wwa-1-3-text'>
                        Our solutions use advance data analytics to help people to build 
                        meaningful connections and gain insights to drive individual and group behavior 
                        changes and promote positive health outcomes. 
                    </p>
                    <p className='wwa-1-3-text'>
                        We have designed innovative solutions for both individual consumers and organisations.
                        Our core offering are the <span className='wwa-1-1-span'>Circles Health App </span> for personal use and 
                        <span className='wwa-1-1-span'> Circles Health App Clients </span> for organisations.
                    </p>
                    <p className='wwa-1-3-btn'>&rarr; Read more</p>
                </div>
                <img src={img4} alt='img' className='wwa-1-4'/>
            </div>
            <img src={img2} alt='img' className='wwa-1-1'/>
        </div>
    )
}
export default Wwa;