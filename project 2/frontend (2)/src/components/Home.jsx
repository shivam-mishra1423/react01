import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import API from "../services/api";

function Home() {

    const [contacts, setContacts] = useState([]);
    const [editId, setEditId] = useState(null);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    // GET ALL CONTACTS
    const fetchContacts = async () => {
        try {
            const res = await API.get("/contacts");
            setContacts(res.data);

        } catch (error) {
            console.log(error);
        }
    };


    // ADD CONTACT
    const addContact = async (data) => {
        try {
            await API.post("/contacts", data);

            fetchContacts();
            reset();

        } catch (error) {
            console.log(error);
        }
    };


    // UPDATE CONTACT
    const updateContact = async (data) => {
        try {
            await API.put(`/contacts/${editId}`, data);

            fetchContacts();
            reset();
            setEditId(null);

        } catch (error) {
            console.log(error);
        }
    };


    // DELETE CONTACT
    const deleteContact = async (id) => {
        try {
            await API.delete(`/contacts/${id}`);

            fetchContacts();

        } catch (error) {
            console.log(error);
        }
    };


    // PAGE LOAD
    useEffect(() => {
        fetchContacts();
    }, []);


    return (
        <>
            <h1>Home Page</h1>

            <form onSubmit={handleSubmit(editId ? updateContact : addContact)}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("name")}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email")}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Enter Phone"
                    {...register("phone")}
                />

                <br /><br />

                <button type="submit">
                    {editId ? "Update Contact" : "Add Contact"}
                </button>

            </form>

            <hr />

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {contacts.map((contact) => (

                        <tr key={contact._id}>

                            <td>{contact.name}</td>

                            <td>{contact.email}</td>

                            <td>{contact.phone}</td>

                            <td>

                                <button
                                    type="button"
                                    onClick={() => {

                                        reset({
                                            name: contact.name,
                                            email: contact.email,
                                            phone: contact.phone
                                        });

                                        setEditId(contact._id);

                                    }}
                                >
                                    Edit
                                </button>


                                <button
                                    type="button"
                                    onClick={() => deleteContact(contact._id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </>
    );
}

export default Home;