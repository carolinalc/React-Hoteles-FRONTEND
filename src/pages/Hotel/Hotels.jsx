import React, { useState } from 'react'
import ciudadImage from "../../imagen/cuidad.jpg"
import resort from "../../imagen/resort.jpg"
import tematico from "../../imagen/tematico.jpg"
import rural from "../../imagen/rural.jpg"
import ListHotelCiudad from '../../components/ListHotelCategories/ListHotelCiudad'
import ListHotelResort from '../../components/ListHotelCategories/ListHotelResort'
import ListHotelRural from '../../components/ListHotelCategories/ListHotelRural'
import ListHotelTematico from '../../components/ListHotelCategories/ListHotelTematico'

//Componente a importar
// import ListHotelCategori from "../components/ListHotelCategori"

function Hoteles() {

    const [ showList, setShowList ] = useState(false)


    const handleShow = ()=> {
      setShowList(!showList)
     
    }

  return (
    <div> 
     
         <div>   
            <button onClick={handleShow}><img src={ciudadImage}  alt="hotelciudad" width={500}/></button>
             { showList === true && <ListHotelCiudad /> } 
          </div>

          <div>
            <button onClick={handleShow}><img src={resort} alt="hotelresort" width={500}/></button> 
            { showList === true && <ListHotelResort /> }  
          </div>

          <div>
            <button onClick={handleShow}><img src={rural} alt="hotelrural" width={500}/></button>
            { showList === true && <ListHotelRural /> }               
          </div>

          <div>
            <button onClick={handleShow}><img src={tematico} alt="hoteltematico" width={500}/></button>
            { showList === true && <ListHotelTematico/> } 
         </div>
         {/* <ListHotelCategori getAllDetailsProps={getAllDetails}/> */}

    </div>
  )
}

export default Hoteles
