import React from 'react';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { category, img, about, id, description } = props.service;
    console.log();
    const history = useHistory();
    const handleDetails = (singleService) => {
        const servicePath = `/services/${id}`
        history.push({
            pathname: servicePath,
            state: JSON.stringify(props.service)
        })

    }
    return (
        <div >
            <div className="col singleCard">
                <div className="card h-100">
                    <img src={img} className="card-img-top card-img image" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{category}</h4>
                        <h6 className="card-text text-secondary">{about}</h6>
                        <div className='mt-5'>
                            <button className='button me-2'>Book Now</button>
                            <button className='button ms-2'> <NavLink className='detailLink' to={{

                                pathname: `/services/${id}`,
                                state: {

                                    obj: props.service
                                }

                            }}




                            >See Details</NavLink></button>
                        </div>

                    </div>



                </div>

            </div>
        </div >
    );
};

export default Service;