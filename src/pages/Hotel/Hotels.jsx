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
     
         <div>   
            <button onClick={handleShowCiudad}><img src={ciudadImage}  alt="hotelciudad" width={500}/></button>
             { showListCiudad === true && <ListHotelCiudad /> } 
          </div>

          <div>
            <button onClick={handleShowResort}><img src={resort} alt="hotelresort" width={500}/></button> 
            { showListResort === true && <ListHotelResort /> }  
          </div>

          <div>
            <button onClick={handleShowRural}><img src={rural} alt="hotelrural" width={500}/></button>
            { showListRural === true && <ListHotelRural /> }               
          </div>

          <div>
            <button onClick={handleShowTematico}><img src={tematico} alt="hoteltematico" width={500}/></button>
            { showListTematico === true && <ListHotelTematico/> } 
         </div>
         {/* <ListHotelCategori getAllDetailsProps={getAllDetails}/> */}

    </div>
  )
}

export default Hoteles
