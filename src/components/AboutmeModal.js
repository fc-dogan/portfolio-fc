import React , {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import AboutMe from './AboutMe';

function AboutmeModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        About me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About me.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AboutMe />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default AboutmeModal
