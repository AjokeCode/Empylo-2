import './mission.css';
import img1 from './Frame 123.svg';
import './mission.css';
const Mission =()=>{
    return(
        <div className='mission'>
                <div className='mission-1'>
                    <h1 className='mission-header'>
                        Our Mission
                    </h1>
                    <p className='mission-1-text'>
                    Our mission is to improve lives through evidence-based digital health solutions. 
                    We want to build products that truly impact the way people live, thrive and work.
                    </p>
                    <p className='mission-1-text'>
                    As a clinician led company, Empylo Health is a health technology and consulting company 
                    that provides solutions that address global health challenges and their associated risks. 
                    Our solutions use advanced data analytics to help people to build meaningful connections and 
                    gain insights to drive individual and group behaviour change and promote positive health outcomes.
                    </p>
                    <p className='mission-1-text'>
                    We have designed innovative solutions for both individual consumers and organisations. 
                    Our core offerings are the <span className='mission-span'>Circles Health App</span> 
                    for personal use and <span className='mission-span'>Circles Health App Client</span> for organisations.
                    </p>
                </div>
                <div className='mission-2'>
                    <img src={img1} alt='img' className='mission-img'/>
                </div>
        </div>
    )
}
export default Mission;