import service from "./config.services";

const getComments = (id) => {
    return service.get(`/coment/${id}`)
}

const createComments = (id, newComment) =>{
    return service.post(`/coment/${id}/create`, newComment)
}


export { getComments, createComments}