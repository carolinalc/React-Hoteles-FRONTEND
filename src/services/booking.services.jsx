import service from "./config.services";

const createAllBooking = (id, bookingCreate)=> {
    return service.post(`/booking/${id}/create`, bookingCreate)
}

const getAllBooking = () => {
    return service.get("/booking")
}

const deleteBooking = (id) => {
    return service.delete(`/booking/${id}/delete`)
}


export {
    createAllBooking,
    getAllBooking,
    deleteBooking
}