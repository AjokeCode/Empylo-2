import './contactus.css';
import img4 from '../git/Frame 77.svg';

const Contactus =()=>{
    return(
        <div className='contact'>
            <h1 className='contact-header'>
            The "Contact Us" button serves as a direct link to our contact form, offering visitors a streamlined means of reaching out to us. Strategically placed, this button invites users to initiate communication effortlessly. Upon clicking, users are directed to our contact form, where they can conveniently submit inquiries, messages, or feedback. With its clear and concise label, the "Contact Us" button simplifies 
            the process of engaging with our team, fostering seamless communication and interaction.
            </h1>
            <div className='contact-div'>
                <img src={img4} alt='img' className='contact-img-4'/>
                    <form className='contact-form'>
                        <div className='contact-inputs'>
                        <input placeholder='First Name' type='text' className='contact-input'/>
                        <input placeholder='Last Name' type='text' className='contact-input'/>
                        </div>
                        <input placeholder='Email' type='email' className='contact-input2'/>
                        <input placeholder='Company Name' type='text' className='contact-input2'/>
                        <textarea placeholder='Message' type='text' className='contact-input3'>

                        </textarea>
                        <button className='contact-btn'>Contact Us</button>
                        <p className='contact-form-text'>
                        By submitting this form, you agree to us storing and using your 
                        information to assist with your inquiry. 
                        If you wish for us to delete this data, please let us know via this same form.
                        </p>
                    </form>
                </div>
        </div>
    )
}
export default Contactus;