import './style.css'

function DropDown({ label, arr, cb, cb2 }) {

    const sendOptions = (e) => {
        if (label.includes("Country")) {
            cb(e.target.value);
            cb2(arr.find(obj => obj.label === e.target.value).states[0].label);
        } else {
            cb(e.target.value);
        }
    }

    return (
        <div className="dropdown">
            <label>{label}</label>
            <select onChange={sendOptions}>
                {arr?.map(country => {
                    return (
                        <option key={country.label} value={country.label}>{country.label}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default DropDown;