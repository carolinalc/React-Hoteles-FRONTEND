import service from "./config.services";

const createAllBooking = (id, bookingCreate)=> {
    return service.post(`/hotels/${id}/booking/create`, bookingCreate)
}

const getAllBooking = (id) => {
    return service.get(`/hotels/${id}/booking`)
}




export {
    createAllBooking,
    getAllBooking 
}