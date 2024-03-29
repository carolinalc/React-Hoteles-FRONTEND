import service from "./config.services";

const getIsAdmin = () => {
    return service.get("/profile/admin")
}

const getProfileData = () => {
    return service.get("/profile/user")
}

const getProfileEdit = (_id, updateProfile) => {
    return service.patch(`/profile/${_id}/edit`, updateProfile)
}

const getBookingProfile = () => {
    return service.get("/profile/booking")
}

const deleteBookingUser = () => {
    return service.delete(`/profile/delete`)
}

export { 
    getProfileData, 
    getProfileEdit, 
    getIsAdmin, 
    getBookingProfile, 
    deleteBookingUser 
}