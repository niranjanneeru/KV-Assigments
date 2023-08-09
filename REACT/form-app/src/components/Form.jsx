import { useEffect, useState } from "react";
import DropDown from "./DropDown/Field";


const Form = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // Mount Phase
            setData([
                {
                    label: "None",
                    states: [{ label: "None" }],
                },
                {
                    label: "India",
                    states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
                },
                {
                    label: "Japan",
                    states: [{ label: "Tokyo" }, { label: "Osaka" }],
                },
            ]);
        }, 5000);
    }, [])

    const [state, setState] = useState("None");

    const [country, setCountry] = useState("None");

    const submitData = () => {
        if (country === "None") {
            alert("Country Not Selected");
            return;
        }
        if (state === "None") {
            alert("State Not Selected");
            return;
        }
        console.log("Country: ", country);
        console.log("State: ", state);
    }
    return (
        <div className="form">
            <h1>Location Details</h1>
            <DropDown label="Choose Country" arr={data} cb={(c) => setCountry(c)} cb2={(s) => setState(s)} />
            {country !== "None" && <DropDown label="Choose State" arr={data.find(obj => obj.label === country).states} cb={(s) => setState(s)} />}
            <button onClick={submitData}>Submit</button>
        </div>
    )
}

export default Form;