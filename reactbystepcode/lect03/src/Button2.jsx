import { useState } from "react";

function Btn() {
    const [counter, setcounter] = useState(0);

    return (
        <>
            <h2>Counter {counter}</h2>

            <button onClick={() => setcounter(counter => counter + 1)}>
                Update
            </button>
        </>
    );
}

export default Btn;