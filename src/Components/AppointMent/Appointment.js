import React from 'react';
import './Appointment.css'
import apointmentImg from '../../Data/team-young-specialist-doctors-standing-corridor-hospital (1).jpg'
import { Col, Form, Row, Button } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className='container appointment text-center'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className="col-md-4 col-lg-4 col-sm-10 text-start ms-3">
                    <h5><i className="fas fa-clinic-medical font"></i> <span className='text-custom'>MediTech</span></h5>
                    <h6>Secure Patient Portal</h6>
                    <p>Standard turnaround time for messages or request sent via portal.If you have urdent ,call our office <span className='text-primary'>+9495675635</span></p>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-10 me-3'>
                    <img className='apointmentImg img-fluid' src={apointmentImg} alt="" />
                </div>
            </div>
            <div className='mt-3'>
                <h5>If you have an Emergency, please call us 1919.Do not use patient portal for any Emergencies.</h5>
            </div>
            <div>
                <h6 className='mt-5 text-primary'>Fill The form for any types of appointment in Meditech</h6>
            </div>
            <div className='row'>
                <Form className=' text-start mx-auto p-5 fillForm mt-5 col-sm-10 col-md-6 col-lg-6 '>
                    <Row className="mb-3 ">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Purpose</Form.Label>
                            <Form.Select defaultValue="Choose...">

                                <option>Health Check Up</option>
                                <option>Meet Experts</option>
                                <option>Diagnosis</option>
                                <option>Pathology</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Time</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Gender
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Others"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree with terms and policies" />
                    </Form.Group>

                    <Button variant="outline-success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>

    );
};

export default Appointment;