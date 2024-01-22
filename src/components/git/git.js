import './git.css';
import img1 from './Dots component (2).svg';
import img2 from './Vector 2.png';
import img3 from './Ellipse 3.png';
import img4 from './Frame 77.svg';
import img5 from './Union.svg';

const Git =()=>{
    return(
        <div className='git'>
            <img src={img1} alt='img' className='git-img'/>

            <div className='git-2'>
            <div className='git-div'>
                <img src={img4} alt='img' className='git-img-4'/>
                <div className='git-left'>
                    <form className='git-form'>
                        <div className='git-inputs'>
                        <input placeholder='First Name' type='text' className='git-input'/>
                        <input placeholder='Last Name' type='text' className='git-input'/>
                        </div>
                        <input placeholder='Email' type='email' className='input'/>
                        <input placeholder='Company Name' type='text' className='input'/>
                        <textarea placeholder='Message' type='text' className='input-2'>

                        </textarea>
                        <button className='git-btn'>GET IN TOUCH</button>
                        <p className='git-form-text'>
                        By submitting this form, you agree to us storing and using your 
                        information to assist with your inquiry. 
                        If you wish for us to delete this data, please let us know via this same form.
                        </p>
                    </form>
                    <img src={img3} alt='img' className='git-img-3'/>
                </div>
                </div>
                
            <div className='git-div-2'>
                    <h1 className='git-div-2-header'>
                    Talk to Empylo about how we can transform your organisation today!
                    </h1>
                    <p className='git-div-2-text'>
                    Get in to touch to embark on a mission to prioritise employee wellbeing. 
                    By registering your employees, you are not only investing in their mental 
                    health but also cultivating a positive and resilient workforce. 
                    </p>
                    <p className='git-div-2-text'>
                    Join us in championing a workplace that values mental health, and together, 
                    let's create a nurturing environment where every employee can thrive.
                    </p>
                </div>
                </div>
            <img src={img2} alt='img' className='git-img-2' />
        </div>
    )
}
export default Git