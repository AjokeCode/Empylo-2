import './contactus.css';
import img4 from '../git/Frame 77.svg';
import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Contactus =()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        companyname: '',
        message: '',
    });
    const handleChange = (e)=>{
        e.preventDefault()
        setFormData({
            ...formData, [e.target.name ] : e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
          const response = await fetch('https://empylo-neon.vercel.app/api/contact-us', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            setIsLoading(false)
            alert("form submitted successfully")
          } else {
            
            alert("There is error submitting this form please submit again");
          }
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }};

    return(
        <div className='contact'>
            <h1 className='contact-header'>
            Get in touch if you would like to strengthen 
            connections and improve health for yourself 
            or your organisation.
            </h1>
            <div className='contact-div'>
                <img src={img4} alt='img' className='contact-img-4'/>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className='contact-inputs'>
                        <input placeholder='First Name' type='text' className='contact-input' name='firstname' onChange={handleChange}/>
                        <input placeholder='Last Name' type='text' className='contact-input' name='lastname' onChange={handleChange}/>
                        </div>
                        <input placeholder='Email' type='email' className='contact-input2' name='email' onChange={handleChange}/>
                        <input placeholder='Company Name' type='text' className='contact-input2' name='companyname' onChange={handleChange}/>
                        <textarea placeholder='Message' type='text' className='contact-input3' name='message' onChange={handleChange}>

                        </textarea>
                        <button className='contact-btn' type='submit'>
                        {isLoading?  (<BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#0F2C7D"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                        />): (<>GET IN TOUCH</>)}
                        </button>
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