function Loader({

    loading,

    hasMore

}) {

    return (

        <>

            {

                loading &&

                <h3>

                    Loading...

                </h3>

            }

            {

                !hasMore &&

                <h3>

                    No More Contacts

                </h3>

            }

        </>

    );

}

export default Loader;