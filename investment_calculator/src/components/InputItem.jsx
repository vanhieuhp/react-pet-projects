export default function InputItem({id, label, onChange, value}) {

    return (
        <div className="input-item">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="number" value={value} onChange={onChange}></input>
        </div>
    )
}