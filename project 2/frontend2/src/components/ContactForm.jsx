import { useEffect } from "react";

import { useForm } from "react-hook-form";

function ContactForm({

    editId,

    editData,

    handleAdd,

    handleUpdate

}) {

    const {

        register,

        handleSubmit,

        reset

    } = useForm();

    useEffect(() => {

        if (editData) {

            reset({

                name: editData.name,

                email: editData.email,

                phone: editData.phone

            });

        }

    }, [editData]);

    const submit = async (data) => {

        if (editId) {

            await handleUpdate(data);

        }

        else {

            await handleAdd(data);

        }

        reset();

    };

    return (

        <form onSubmit={handleSubmit(submit)}>

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

                {

                    editId

                        ?

                        "Update Contact"

                        :

                        "Add Contact"

                }

            </button>

        </form>

    );

}

export default ContactForm;