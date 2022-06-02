import service from "./config.services";

const getAllHotelService = () => {
    return service.get("/hotels")
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


export { getAllHotelService, addNewHotelService, getHotelDetailsService, editHotelService, deleteHotelService }