import React, { useState } from 'react'
import ciudadImage from "../../imagen/cuidad.jpg"
import resort from "../../imagen/resort.jpg"
import tematico from "../../imagen/tematico.jpg"
import rural from "../../imagen/rural.jpg"
import ListHotelCiudad from '../../components/ListHotelCategories/ListHotelCiudad'
import ListHotelResort from '../../components/ListHotelCategories/ListHotelResort'
import ListHotelRural from '../../components/ListHotelCategories/ListHotelRural'
import ListHotelTematico from '../../components/ListHotelCategories/ListHotelTematico'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Componente a importar
// import ListHotelCategori from "../components/ListHotelCategori"

function Hoteles() {

    const [ showListCiudad, setShowListCiuad ] = useState(false)
    const [ showListResort, setShowListResort ] = useState(false)
    const [ showListRural, setShowListRural ] = useState(false)
    const [ showListTematico, setShowListTematico ] = useState(false)


    const handleShowCiudad = ()=> {
      setShowListCiuad(!showListCiudad)
     
    }

    const handleShowResort = ()=> {
      setShowListResort(!showListResort)
     
    }

    const handleShowRural = ()=> {
      setShowListRural(!showListRural)
     
    }

    const handleShowTematico = ()=> {
      setShowListTematico(!showListTematico)
     
    }

  return (
    <div> 

      <Row xs={4} md={2} className="g-4">
        
          <Col>
            <Card>
              <Card.Img variant="top" src={ciudadImage} alt="hotelciudad" width={500} onClick={handleShowCiudad} />
              <Card.Body>
                <Card.Text>
                { showListCiudad === true && <ListHotelCiudad /> } 
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={resort} alt="hotelresort" width={500} onClick={handleShowResort} />
              <Card.Body>
                <Card.Text>
                { showListResort === true && <ListHotelResort /> } 
                </Card.Text>
              </Card.Body>
            </Card> 
            </Col>
            <Col>          
            <Card>
              <Card.Img variant="top" src={rural} alt="hotelrural" width={500} onClick={handleShowRural} />
              <Card.Body>
                <Card.Text>
                { showListRural === true && <ListHotelRural /> }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>          
            <Card>
              <Card.Img variant="top" src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654092361/Imagen%20hoteles/Tem%C3%A1tico/download_yexhxo.jpg" 
              alt="hoteltematico" width={500} onClick={handleShowTematico}/>
              <Card.Body>
                <Card.Text>
                { showListTematico === true && <ListHotelTematico/> }
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      
      </Row>       

    </div>
  )
}

export default Hoteles
