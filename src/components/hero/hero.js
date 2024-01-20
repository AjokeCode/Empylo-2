import './hero.css';
import img1 from './Vector (8).svg';
import img2 from './Vector (9).svg';
import img3 from './Vector (10).svg';
import img4 from './Vector 2 (1).svg';
const Hero =()=>{
    return (
        <div className='hero'>
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

            </div>
        </div>
    )
}
export default Hero;