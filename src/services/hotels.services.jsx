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

const addNewHotelService = (theHotel) => {
    return service.post("/hotels", theHotel)
}

const getHotelDetailsService = (id) => {
    return service.get(`/hotels/${id}`)
}

const editHotelService = (id, theHotel) => {
    return service.patch(`/hotels/${id}`, theHotel)
}

const deleteHotelService = (id) => {
    return service.delete(`/hotels/${id}`)
}


export { getAllHotelService, getCiudadService, getResortService, getRuralService, getTematicoService, addNewHotelService, getHotelDetailsService, editHotelService, deleteHotelService,  getCategoriesPension }