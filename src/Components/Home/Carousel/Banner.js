import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner from '../../../Data/elderly-woman-doctor-appointment-modern-private-clinic-while-she-sitts-hospital-bed-physician-is-listening-her-heart-beat-health-care-medicine-treatment-specialist-consultation (1).jpg'

const Banner = () => {
    return (
        <div>
            <div>
                <div>
                    <img className="banner img-fluid" src={banner} alt="" />
                </div>
                <div className='title pt-3 pb-3 '>
                    <div >
                        <h2 className='mb-3 text-custom'>MediTech</h2>
                    </div>
                    <div className='d-flex justify-content-around align-items-betweeen flex-wrap '>
                        <div>
                            <h3><i className="fas fa-user-md"></i></h3>
                            <h4>Treatment</h4>
                        </div>
                        <div>
                            <h3><i className="fas fa-file-medical-alt"></i></h3>
                            <h4>Diagnosis</h4>
                        </div>
                        <div>
                            <h3><i className="fas fa-hand-holding-medical"></i></h3>
                            <h4>Health Care</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;