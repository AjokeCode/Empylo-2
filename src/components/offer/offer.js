import './offer.css';
import img1 from './Frame 65.png';
import img2 from './Frame 66.png';
import img3 from './Frame 67.png';
import img4 from './Divider.png';

const Offer = ()=>{
    return (
        <>
        <div className='offer'>
            <h1 className='offer-header'>What we offer</h1>
            <h2 className='offer-header-2'>We have the technology and network of talent to help.</h2>
            <div className='offer-images'>
                <img src={img1} alt='img' className='offer-img'/>
                <img src={img2} alt='img' className='offer-img'/>
                <img src={img3} alt='img' className='offer-img'/>
            </div>
            <img src={img4} alt='img' className='offer-line'/>
            <div className='offer-div'>
                <div className='offer-div-1'>
                <img src={img1} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header'>Peer Support</h1>
                    <p className='offer-div-text'>We provide a data-powered-community-based emotional support approach to combat 
                        loneliness and improved health. By creating 'Circles' with friends. family and colleagues,the 
                        app aim to reduce social isolation and the associated physical and mental health risk. 
                    </p>
                </div>
                <div className='offer-div-1'>
                <img src={img2} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header'>Data Analytics</h1>
                    <p className='offer-div-text'>
                        We provide advanced analytics to enable users to identify health outcomes to support themselves 
                        and others, and to provide fast and accurate driven-decisions to drive positive people, experiences
                         and organisations outcomes.
                    </p>
                </div>
                <div className='offer-div-1'>
                <img src={img3} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header s1'>Training and Consultancy</h1>
                    <p className='offer-div-text'>
                        Our expert health Consultants offer concierge consulting services using our Circles Health App 
                        Client solution. Our consultant will work closely with organisations to help them to achieve their 
                        objectives. We provide expert analysis, in-house wellness screening, advice and education, and 
                        sign-posting to relevant support.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Offer;