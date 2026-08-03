import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";

import {
    getContacts,
    addContact,
    updateContact,
    deleteContact
} from "../services/contactService";

import "./Home.css";

function Home() {

    const [contacts, setContacts] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState(null);

    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    // ==========================
    // Fetch Contacts
    // ==========================

    const fetchContacts = async () => {

        try {

            const res = await getContacts(page);

            const newContacts = res.data.contacts;

            if (page === 1) {

                setContacts(newContacts);

            } else {

                setContacts((prev) => [...prev, ...newContacts]);

            }

            if (res.data.currentPage >= res.data.totalPages) {

                setHasMore(false);

            }

        } catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Initial Load
    // ==========================

    useEffect(() => {

        fetchContacts();

    }, [page]);

    // ==========================
    // Next Page
    // ==========================

    const fetchMoreData = () => {

        setPage((prev) => prev + 1);

    };

    // ==========================
    // Add Contact
    // ==========================

    const handleAdd = async (data) => {

        try {

            await addContact(data);

            setPage(1);

            setHasMore(true);

            const res = await getContacts(1);

            setContacts(res.data.contacts);

        }

        catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Update Contact
    // ==========================

    const handleUpdate = async (data) => {

        try {

            await updateContact(editId, data);

            setEditId(null);

            setEditData(null);

            setPage(1);

            setHasMore(true);

            const res = await getContacts(1);

            setContacts(res.data.contacts);

        }

        catch (error) {

            console.log(error);

        }

    };

    // ==========================
    // Delete Contact
    // ==========================

    const handleDelete = async (id) => {

        try {

            await deleteContact(id);

            setPage(1);

            setHasMore(true);

            const res = await getContacts(1);

            setContacts(res.data.contacts);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="home-container">

            <h1>Contact Manager</h1>

            <ContactForm

                editId={editId}

                editData={editData}

                handleAdd={handleAdd}

                handleUpdate={handleUpdate}

            />

            <hr />

            <InfiniteScroll

                dataLength={contacts.length}

                next={fetchMoreData}

                hasMore={hasMore}

                loader={<h2>Loading...</h2>}

                endMessage={

                    <h3 style={{ textAlign: "center" }}>

                        No More Contacts

                    </h3>

                }

            >

                <ContactTable

                    contacts={contacts}

                    handleDelete={handleDelete}

                    setEditId={setEditId}

                    setEditData={setEditData}

                />

            </InfiniteScroll>

        </div>

    );

}

export default Home;