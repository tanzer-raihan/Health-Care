import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-5 footer pt-3'>
            <div >
                <h2><i className="fas fa-clinic-medical font"></i> MediTech</h2>
                <h6 className='text-secondary'>Always Here For Your Need With Best Services And To Ensure You A Ill  Free Life</h6>
            </div>
            <div className='d-flex justify-content-around align-items-center mt-5'>
                <div className='contact text-start'>
                    <h4>Contact Us</h4>
                    <h6>Web: www.meditech.com</h6>
                    <h6>Email:meditech@health.com</h6>
                    <h6>contact:+453531431531</h6>
                    <h6>Emergency:+453532543632</h6>
                </div>
                <div className='text-start'>
                    <h6>About Us</h6>
                    <h6>Diplomas and Awards</h6>
                    <h6>Terms and Conditions</h6>
                    <h6>Sign In</h6>
                    <h6>Register Now</h6>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center p-3 icon'>
                <h2 className='ms-5'><i className="fab fa-facebook-square"></i></h2>
                <h2 className='ms-5'><i className="fab fa-instagram-square"></i></h2>
                <h2 className='ms-5'><i className="fab fa-twitter-square"></i></h2>
                <h2 className='ms-5'><i className="fab fa-linkedin"></i></h2>
            </div>
        </div>
    );
};

export default Footer;