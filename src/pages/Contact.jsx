import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Form, FormGroup, FormLabel, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import {}from 'react-router-dom';

const Contact = () => {
  const handleSubmit = (event) => {}
  return (
    <motion.div className='contact' 
    initial={{ scaleY:0 }}
    animate={{ scaleY:1 }}
    // exit={{ scaleY:0 }}
    transition={{ duration:0.3}}>
      <h2>   Contact  </h2>
      <Row>
        <Col>
          <div className='contact-form'>
            <Form onSubmit={handleSubmit}>
              <FormGroup className= "mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl type="text" placeholder="Name"></FormControl>
              </FormGroup>
              <FormGroup className= "mb-3" controlId="validationCustom02">
                <FormLabel>Email</FormLabel>
                <FormControl type="email" placeholder="Email"></FormControl>
              </FormGroup>
              <FormGroup className= "mb-3" controlId="validationCustom03">
                <FormLabel>Message</FormLabel>
                <FormControl type as="textarea" placeholder="Message"></FormControl>
              </FormGroup>
              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className='contact-data'>
            <p>
              Email-Id : <br/> bhavanalanjewar123@gmail.com 
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem><a href="https://www.linkedin.com/in/bhavana-lanjewar-a0049a43/" target="_blank" >LinkedIn</a></ListGroupItem>
                <ListGroupItem><a href="https://github.com/BhavanaLanjewar" target="_blank" >GitHub</a></ListGroupItem>
                <ListGroupItem><a href="" target="_blank" >Instagram</a></ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contact