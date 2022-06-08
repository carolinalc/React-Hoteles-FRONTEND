import service from "./config.services";

const createAllBooking = (id, bookingCreate)=> {
    return service.post(`/booking/${id}/create`, bookingCreate)
}

const getAllBooking = () => {
    return service.get("/booking")
}

const deleteBooking = (idBooking) => {
    return service.delete(`/booking/${idBooking}`)
}


export {
    createAllBooking,
    getAllBooking,
    deleteBooking
}