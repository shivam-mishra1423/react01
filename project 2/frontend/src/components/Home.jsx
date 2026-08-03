import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import API from "../services/api";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
    const [contacts, setContacts] = useState([]);
    const [editId, setEditId] = useState(null);

    // Infinite Scroll
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    

    const limit = 5;

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    
    // Fetch Contacts
  
    const fetchContacts = async (currentPage = page) => {
        try {
            const res = await API.get(
                `/contacts?page=${currentPage}&limit=${limit}`
            );

            if (currentPage === 1) {
                setContacts(res.data.contacts);
            } else {
                setContacts((prev) => [...prev, ...res.data.contacts]);
            }

            setHasMore(res.data.currentPage < res.data.totalPages);
            console.log(
  "Current Page:",
  currentPage,
  res.data.contacts.map((c) => c._id)
);

        } catch (error) {
            console.log(error);
        }
    };

   
   //infinite
    const fetchMoreData = () => {
        if (hasMore) {
            setPage((prev) => prev + 1);
        }
    };

   
    // Add Contact
  
    const addContact = async (data) => {
        try {
            await API.post("/contacts", data);

            reset();

           setHasMore(true);

if (page === 1) {
    fetchContacts(1);
} else {
    setPage(1);
}
            
        } catch (error) {
            console.log(error);
        }
    };

  
    // Update Contact
   
    const updateContact = async (data) => {
        try {
            await API.put(`/contacts/${editId}`, data);

            reset();
            setEditId(null);

            setHasMore(true);

if (page === 1) {
    fetchContacts(1);
} else {
    setPage(1);
}
            
        } catch (error) {
            console.log(error);
        }
    };

  
    // Delete Contact
  
    const deleteContact = async (id) => {
        try {
            await API.delete(`/contacts/${id}`);

            setHasMore(true);

if (page === 1) {
    fetchContacts(1);
} else {
    setPage(1);
}
            
        } catch (error) {
            console.log(error);
        }
    };

  useEffect(() => {
    fetchContacts();
}, [page]);

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

            <InfiniteScroll
                dataLength={contacts.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <h4 style={{ textAlign: "center" }}>
                        No More Contacts
                    </h4>
                    
                    
                }
                height={400}
            >
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
                                                phone: contact.phone,
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
            </InfiniteScroll>
        </>
    );
}

export default Home;