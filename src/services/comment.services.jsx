import service from "./config.services";

const getAllComments = (id) =>{
    return service.get(`/hotels/${id}/coment`)
}
console.log(getAllComments)

const createComments = (id, newComment) =>{
    return service.post(`/hotels/${id}/coment/create`, newComment)
}


export{ getAllComments, createComments}