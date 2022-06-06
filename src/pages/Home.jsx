import React from 'react'


function Home() {
  return (
    <div>
      <h1>Wellcome to the React Hotel</h1>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="ciudad"/>
          </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="resort"/>
          </div>
          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="rural"/>
          </div>
          <div class="carousel-item">
            <img src="" className="d-block w-100" alt="tematico"/>
          </div>
        </div>
      </div>

      </div>

  )
}

export default Home