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
            <img src={ciudadImage}  alt="hotelciudad" width={500} onClick={handleShowCiudad}/>
             { showListCiudad === true && <ListHotelCiudad /> } 
          </div>

          <div>
             <img src={resort} alt="hotelresort" width={500} onClick={handleShowResort}/>
            { showListResort === true && <ListHotelResort /> }  
          </div>

          <div>
            <img src={rural} alt="hotelrural" width={500} onClick={handleShowRural}/>
            { showListRural === true && <ListHotelRural /> }               
          </div>

          <div>
            <img src={tematico} alt="hoteltematico" width={500} onClick={handleShowTematico}/>
            { showListTematico === true && <ListHotelTematico/> } 
         </div>
         {/* <ListHotelCategori getAllDetailsProps={getAllDetails}/> */}

    </div>
  )
}

export default Hoteles
