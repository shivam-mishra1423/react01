import API from "./api";

export const getContacts = (page) => {

    return API.get(`/contacts?page=${page}&limit=5`);

};

export const addContact = (data) => {

    return API.post("/contacts", data);

};

export const updateContact = (id, data) => {

    return API.put(`/contacts/${id}`, data);

};

export const deleteContact = (id) => {

    return API.delete(`/contacts/${id}`);

};