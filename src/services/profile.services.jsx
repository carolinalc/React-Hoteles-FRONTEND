import service from "./config.services";

const getProfileData = (_id) => {
    return service.get(`/profile/${_id}`)
}

const getProfileEdit = (id) => {
    return service.patch(`/profile/${id}`)
}

export { getProfileData, getProfileEdit }