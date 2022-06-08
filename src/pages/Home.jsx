import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    <div>
      
      <h1>Wellcome to the React Hotel</h1>
      <Carousel className="carousel">
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716438/Carrousel%20de%20hoteles/download_uvphyn.jpg"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716441/Carrousel%20de%20hoteles/download_ifrszj.jpg"
                  alt="Second slide"
                />
                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716453/Carrousel%20de%20hoteles/images_rywcnx.jpg"
                  alt="Third slide"
                />
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716496/Carrousel%20de%20hoteles/images_latbsr.jpg"
                  alt="Fourt slide"
                />
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
          </Carousel.Item>
       </Carousel>
     </div>

  )
}

export default Home