import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import './Details.css'
const Details = (props) => {
    const { sid } = useParams()
    const location = useLocation();
    const { obj } = location.state;







    return (
        <div className='container d-flex flex-column justify-content-center align-items-center mt-5' >
            <div>
                <h3><i class="fas fa-clinic-medical font"></i> <span className='text-custom'>MediTech {obj.category}</span> </h3>
                <h5 className=' text-secondary mt-3'>{obj.desceiption}</h5>
            </div>


            <div className='row mt-5 detailCard '>
                <div class="card col-md-9 col-lg-9 col-sm-10 mx-auto" >
                    <img src={obj.img} class="card-img-top img-fluid mt-2 " alt="..." />
                    <div class="card-body">
                        <div className='text-start'>
                            <h4 class="card-title">{obj.category}</h4>
                            <small class="card-text text-secondary ">{obj.about}</small>

                            <h6 className="mt-2">Price: ${obj.price}</h6>
                            <h6>Availablity: {obj.Available}</h6>
                            <div>
                                <h6>Discount: {obj.facility}</h6>


                            </div>

                        </div>
                        <button className='detailBook text-center'>Book Now</button>


                    </div>

                </div>

            </div>


        </div>
    );
};

export default Details;