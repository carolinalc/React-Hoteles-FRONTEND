import service from "./config.services";

const createAllBooking = (id, bookingCreate)=> {
    return service.post(`/booking/${id}/create`, bookingCreate)
}

const getAllBooking = () => {
    return service.get("/booking")
}


export {
    createAllBooking,
    getAllBooking 
}