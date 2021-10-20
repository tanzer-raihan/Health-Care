import React from 'react';
import './WhyToUs.css'
import doctor from '../../../Data/friendly doctor.jpg'
import patient from '../../../Data/happy patient.jpg'
import homeService from '../../../Data/home-service.png'
import tech from '../../../Data/tech2.jpg'
const WhyToUs = () => {
    return (
        <div className='container'>
            <div className='text-primary'>
                <h2> Among Plethora of centers Why to us except all?</h2>
                <h6 className='text-secondary'>Because we are determined to provide the Best</h6>
            </div>
            <div className='row   d-flex flex-wrap justify-content-center align-items-center '>
                <div className=" col-md-6 col-sm-12 row row-cols-1 row-cols-md-2 g-4 mt-5">
                    <div className="col ">
                        <div className="card h-100 whyCard">
                            <img src={patient} className="card-img-top whyPhoto" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Most Client Satisfactory</h5>
                                <p className="card-text text-secondary">We have been providing services for more than 12 years to a enormous number of happy clients </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 whyCard">
                            <img src={tech} className="card-img-top whyPhoto" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Most Advanced Technology</h5>
                                <p className="card-text text-secondary">Each of our equipment is qp-to-dated to provide you the best servise</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 whyCard">
                            <img src={doctor} className="card-img-top whyPhoto" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Expert and Patient Friendly Physician</h5>
                                <p className="card-text text-secondary">Take Counsel from our expert doctor and share problems freely</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 whyCard">
                            <img src={homeService} className="card-img-top whyPhoto" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Provide To Door Treatment</h5>
                                <p className="card-text text-secondary">Our physicians are always ready top provide you to door service whenever you ask</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 mt-5'>
                    <div className='rightWhy mb-3'>
                        <h4> Free Ambulance Service for our Clients</h4>
                    </div>
                    <div className='rightWhy mb-3'>
                        <h4>Discount To our all Registered Members</h4>
                    </div>

                    <div className='rightWhy mb-3'>
                        <h4>Provide Reports within 24 hours</h4>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default WhyToUs;