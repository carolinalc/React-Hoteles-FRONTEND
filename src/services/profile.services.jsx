import service from "./config.services";

const getIsAdmin = () =>{
    return service.get("/profile/admin")
}

const getProfileData = (_id) => {
    return service.get(`/profile/${_id}`)
}

const getProfileEdit = (updateProfile) => {
    return service.patch("/profile/edit", updateProfile)
}

const getBookingProfile = () => {
    return service.get("/profile/booking")
}

export { getProfileData, getProfileEdit, getIsAdmin, getBookingProfile }