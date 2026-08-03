function ContactTable({

    contacts,
    handleDelete,
    setEditId,
    setEditData

}) {

    return (

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

                {

                    contacts.map((contact) => (

                        <tr key={contact._id}>

                            <td>{contact.name}</td>

                            <td>{contact.email}</td>

                            <td>{contact.phone}</td>

                            <td>

                                <button

                                    type="button"

                                    onClick={() => {

                                        setEditId(contact._id);

                                        setEditData(contact);

                                    }}

                                >

                                    Edit

                                </button>

                                <button

                                    type="button"

                                    onClick={() => handleDelete(contact._id)}

                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default ContactTable;