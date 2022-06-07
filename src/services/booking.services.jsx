import service from "./config.services";

const createAllBooking = (idHotel, bookingCreate)=> {
    return service.post(`/booking/${idHotel}/create`, bookingCreate)
}

const getAllBooking = () => {
    return service.get("/booking")
}


export {
    createAllBooking,
    getAllBooking 
}