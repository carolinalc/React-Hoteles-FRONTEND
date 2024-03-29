import service from "./config.services";

 const getCategoriesPension = () => {
  return service.get("/hotels/selectores")
 }

const getAllHotelService = () => {
    return service.get("/hotels")
}

const getCiudadService = () => {
    return service.get("/hotels/ciudad")
}

const getResortService = () => {
    return service.get("/hotels/resort")
}
const getRuralService = () => {
    return service.get("/hotels/rural")
}
const getTematicoService = () => {
    return service.get("/hotels/tematico")
}

const addNewHotelService = (formulario) => {
    return service.post("/hotels/create", formulario)
}

const getHotelDetailsService = (id) => {
    return service.get(`/hotels/${id}`)
}

const editHotelService = (id, formularioEdit) => {
    return service.patch(`/hotels/${id}`, formularioEdit)
}

const deleteHotelService = (id) => {
    return service.delete(`/hotels/${id}`)
}

const uploadService = (uploadForm) => {
    return service.post("/uploader", uploadForm)
}


export {
    getAllHotelService, 
    getCiudadService, 
    getResortService, 
    getRuralService, 
    getTematicoService, 
    addNewHotelService, 
    getHotelDetailsService, 
    editHotelService, 
    deleteHotelService,  
    getCategoriesPension,
    uploadService
}