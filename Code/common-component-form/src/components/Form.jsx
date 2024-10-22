import React, { useState } from 'react';
import CommonField from './CommonField';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        checkboxes: [],
        selectedOption: ''
    });

    const Change = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => {
                const newCheckboxes = checked
                    ? [...prev.checkboxes, value]
                    : prev.checkboxes.filter((item) => item !== value);
                return { ...prev, checkboxes: newCheckboxes };
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const Submit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={Submit}>
            <CommonField 
                label="Your Name"
                name="name" 
                type="text"
                value={formData.name}
                onChange={Change}
                required
            />
            <CommonField 
                label="Message"
                name="message" 
                type="textarea"
                value={formData.message}
                onChange={Change}
                required
                placeholder="Send Us A message "
            />
            <CommonField 
                label="What's your hoby"
                name="checkboxes" 
                type="checkbox"
                value={formData.checkboxes}
                onChange={Change}
                options={[
                    { value: 'reading', label: 'Reading' },
                    { value: 'traveling', label: 'Traveling' },
                    { value: 'coding', label: 'Coding' },
                ]}
            />
            <CommonField 
                label="Where did you know our site"
                name="selectedOption" // Add name here
                type="radio"
                value={formData.selectedOption}
                onChange={Change}
                options={[
                    { value: 'Facebook', label: 'Facebook' },
                    { value: 'LinkdIn', label: 'LinkdIn' },
                    { value: 'Friends and referals', label: 'Referal' },
                ]}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
