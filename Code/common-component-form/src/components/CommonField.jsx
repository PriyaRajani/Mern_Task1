const CommonField = ({ 
    label, 
    name, // Add name here
    type, 
    value, 
    onChange, 
    options = [], 
    required = false,
    placeholder = '' 
}) => {
    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea 
                        name={name} 
                        value={value} 
                        onChange={onChange} 
                        required={required} 
                        placeholder={placeholder} 
                    />
                );
            case 'checkbox':
                return options.map((option) => (
                    <label key={option.value}>
                        <input 
                            type="checkbox" 
                            name={name} // Add name here
                            value={option.value} 
                            checked={value.includes(option.value)} 
                            onChange={onChange} 
                        />
                        {option.label}
                    </label>
                ));
            case 'radio':
                return options.map((option) => (
                    <label key={option.value}>
                        <input 
                            type="radio" 
                            name={name} 
                            value={option.value} 
                            checked={value === option.value} 
                            onChange={onChange} 
                        />
                        {option.label}
                    </label>
                ));
            default:
                return (
                    <input 
                        name={name} 
                        type={type} 
                        value={value} 
                        onChange={onChange} 
                        required={required} 
                        placeholder={placeholder} 
                    />
                );
        }
    };

    return (
        <div className="input-field">
            <label>{label}</label>
            {renderInput()}
        </div>
    );
};

export default CommonField;
