import React from 'react';
import './Motivs.css'
import doctors from '../../../Data/motivs3 (1).png'
const Motivs = () => {
    return (
        <div className='row motives d-flex justify-content-center align-items-center '>
            <div className='col-md-6 col-sm-6 '>
                <img className='img-fluid doctorImg' src={doctors} alt="" />
            </div>
            <div className='col-md-6 col-sm-6'>
                <div className='motivesText' >
                    <h2 className='text-primary mt'>Motives</h2>
                    <p>MediTech is determined to provide you all sorts of facilities you need for having a healtht and easier life.Out Experts are always keen to counsel you whenever you require.MediTech contains all kinds of advanced equipment for you heath check up and to identify your illness.Our pathology section is one of the  best beyond all doubt.So,visit MediTech and let us to help you in your ill moment.We are here for you.</p>
                </div>
                <div className='d-flex justify-content-around align-items-center aboutUs  mt-5 text-primary'>
                    <div>
                        <p className='font'><i className="fas fa-users"></i></p>
                        <h6>9000+ Happy Clients</h6>
                    </div>
                    <div>
                        <p className='font'><i className="fas fa-user-md"></i></p>
                        <h6>60+ Doctors</h6>
                    </div>
                    <div>
                        <p className='font'><i className="far fa-calendar-alt"></i></p>
                        <h6>12+ Years Experience</h6>
                    </div>
                    <div>
                        <p className='font'><i className="fas fa-briefcase-medical"></i></p>
                        <h6>9+ Services</h6>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Motivs;