import service from "./config.services";

const createAllBooking = (id)=> {
    return service.post(`/hotels/${id}/booking/create`)
}

const getAllBooking = (id) => {
    return service.get(`/hotels/${id}/booking`)
}




export {
    createAllBooking,
    getAllBooking 
}