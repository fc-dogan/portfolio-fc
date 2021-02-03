import React , {useState} from 'react';
import {Button, Modal, Carousel} from 'react-bootstrap';
import AboutMe from './AboutMe';
import web from "../assets/web.jpg";
import tap from '../assets/taproom.png'

function AboutmeModal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction}
      </span>
    );
  };

  return (
    <div className="container-fluid">
      <Carousel
        nextLabel={"Next"}
        prevLabel={"Previous"}
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={directionButtons("Next")}
        prevIcon={directionButtons("Previous")}
        // fade={true}
      >

      <Carousel.Item interval={false}>
        <img
          className="d-block w-100"
          src={web}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={tap}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
            
    </Carousel>
    </div>
  )

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // return (
  //   <>
  //     <Button variant="primary" onClick={handleShow}>
  //       About me
  //     </Button>

  //     <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" >
  //       <Modal.Header closeButton>
  //         <Modal.Title>About me.</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <AboutMe />
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   </>
  // );

}

export default AboutmeModal
