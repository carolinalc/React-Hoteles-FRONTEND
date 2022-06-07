import service from "./config.services";

const createAllBooking = (id, bookingCreate)=> {
    return service.post(`/hotels/${id}/booking/create`, bookingCreate)
}

const getAllBooking = (idBooking) => {
    return service.get(`/hotels/${idBooking}/booking`)
}


export {
    createAllBooking,
    getAllBooking 
}