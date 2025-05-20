export default function Input({ label, id, type, name, onChange, onBlur, value, error }) {
	return (
		<>
			<div className="control no-margin">
				<label htmlFor={id}>{label}</label>
				<input id={id} type={type} name={name} onBlur={onBlur} onChange={onChange} value={value} />
				<div className="control-error">{error}</div>
			</div>
		</>
	);
}
