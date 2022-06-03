import React, { useState } from 'react'
import ciudadImage from "../../imagen/cuidad.jpg"
import resort from "../../imagen/resort.jpg"
import tematico from "../../imagen/tematico.jpg"
import rural from "../../imagen/rural.jpg"
import ListHotelCiudad from '../../components/ListHotelCategories/ListHotelCiudad'

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
            {/* { showList === true && <ListHotelCiudad /> } */}
            <li><ListHotelCiudad /></li>
          </div>

          <div>
            <button><img src={resort} alt="hotelresort" width={500}/></button>  
          </div>

          <div>
            <button><img src={rural} alt="hotelrural" width={500}/></button>              
          </div>

          <div>
            <button><img src={tematico} alt="hoteltematico" width={500}/></button>
         </div>
         {/* <ListHotelCategori getAllDetailsProps={getAllDetails}/> */}

    </div>
  )
}

export default Hoteles


//! Hace refencia al tipo de hoteles a la page 1º de hoteles.