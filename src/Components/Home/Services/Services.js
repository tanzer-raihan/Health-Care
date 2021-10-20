import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mt-5 mb-5 container' id='services'  >


            <div className='mb-5'  >
                <h1 className='text-primary mb-3'>Let's Browse All Our Services</h1>
                <h6 className='text-secondary'>Best place for your   Health Issues,Counseling and Physical well-being</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4" >
                   {
                       services.map(service=><Service
                       key={service.id}
                       service={service}
                       
                       ></Service>)
                   }
            </div>


        </div>
    );
};

export default Services;