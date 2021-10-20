import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
  return (
    <div className='container mt-5'>
      <h2>Contact Us</h2>
      <div className='text-start mt-5 '>
        <h3>Contacting Your Physician</h3>
        <p>To contact your Pinehurst Medical Clinic physician, please call your physician’s office directly during regular office hours. Refer to our Physician Directory for your physician’s office number. If you need to speak with your physician during holidays or after office hours, please call First Health Moore Regional Hospital at <span className='text-primary'>(910) 715-1000</span> and ask the operator to connect you with the Pinehurst Medical Clinic physician on call

          If you do not know your physician’s name, you may obtain it by calling our main number, <span className='text-primary'>(910) 715-1000</span> or by referring to the list of Pinehurst Medical Clinic physicians on this web site.</p>
      </div>
      <div className='text-start mt-4 ' >
        <h3>Patient Appointment Information</h3>
        <p><small>Please Check appointment Section on our website. <span className='text-primary'>Click Here</span></small></p>
      </div>
      <div className='text-start mt-4 '>
        <h3>Questions About your Bill</h3>
        <div>We’ll be happy to help you with questions about your bill or any other billing or insurance concerns. Please call our Patient Financial Counselors at <span className='text-primary'>910-295-9391.</span></div>
      </div>
      <div className='text-start mt-4 '>
        <h3>
          Calling Your MediTech Internist
        </h3>
        <div><p>

          When you have a question or need something, don’t hesitate to call us; we’re here for you 24 hours a day, 7 days a week! Why would you need to call us? Some examples are:</p></div>
        <div>
          <ul>
            <li>You don’t feel well</li>
            <li>You have a question about a medication your Internist has prescribed</li>
            <li>You have a question about something your Internist has told you.</li>
            <li>It’s time for your annual physical examination</li>
          </ul>
        </div>
      </div>



      <div className='text-start mt-5'>
        <Accordion defaultActiveKey="0" flush >
          <Accordion.Item eventKey="0">
            <Accordion.Header>++ When Should I call</Accordion.Header>
            <Accordion.Body>
              Between the hours of 8:00 am and 4:30 pm (except holidays) call our offices at the number listed under the Physicians’ Directory section of the web site. During all other hours.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header >++ Contaction MediTech Specialist</Accordion.Header>
            <Accordion.Body>
              When you have a question or need something, don’t hesitate to call us; we’re here for you 24 hours a day, 7 days a week! Why would you need to call us? Some examples are:

              <ul>
                <li>You don’t feel well</li>
                <li>You have a question about a medication</li>
                <li>You have a question about something your Specialist has told you</li>
                <li>You want to schedule an appointment with your PMC Specialist</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header >++ Any Discount for Deprived People?</Accordion.Header>
            <Accordion.Body>
              When you have a question or need something, don’t hesitate to call us; we’re here for you 24 hours a day, 7 days a week! Why would you need to call us? Some examples are:


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

    </div>
  );
};

export default About;