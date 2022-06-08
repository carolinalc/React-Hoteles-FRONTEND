import service from "./config.services";

const getIsAdmin = () =>{
    return service.get("/profile/admin")
}

const getProfileData = (_id) => {
    return service.get(`/profile/${_id}`)
}

const getProfileEdit = (_id) => {
    return service.patch(`/profile/${_id}`)
}

const getBookingProfile = (_id) => {
    return service.get(`/profile/${_id}/booking`)
}

export { getProfileData, getProfileEdit, getIsAdmin, getBookingProfile }