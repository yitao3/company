const Checkbox = ({ label, ...props }) => (
    <div className="flex items-center gap-x-2">
        <input {...props} type="checkbox" className={`${props.className || ""} form-checkbox duration-75 rounded`} />
        <label htmlFor={props.id} className="text-sm text-gray-600">
            {label}
        </label>
    </div>
)

export default Checkbox