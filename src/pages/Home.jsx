import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    <div>
      
      <h1>Wellcome to the React Hotel</h1>
      <Carousel className="carousel" fade="true">
          <Carousel.Item >
                <img
                  className="d-block mx-auto"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716438/Carrousel%20de%20hoteles/download_uvphyn.jpg"
                  alt="First slide"
                />
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716441/Carrousel%20de%20hoteles/download_ifrszj.jpg"
                  alt="Second slide"
                />
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716453/Carrousel%20de%20hoteles/images_rywcnx.jpg"
                  alt="Third slide"
                />
          </Carousel.Item>
          <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654716496/Carrousel%20de%20hoteles/images_latbsr.jpg"
                  alt="Fourt slide"
                />
          </Carousel.Item>
       </Carousel>
     </div>

  )
}

export default Home