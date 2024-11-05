import React, { useState } from 'react';

const AppointmentForm = ({ addPatient }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [checkup, setCheckup] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age && date && checkup) {
            addPatient({ id: Date.now(), name ,checkup, age, date });
            setName('');
            setAge('');
            setDate('');
            setCheckup('');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
    };

    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <div>
            <h2>Add Health status</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label style={labelStyle}>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Check up name:</label>
                    <input
                        type="text"
                        value={checkup}
                        onChange={(e) => setCheckup(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <div>
                    <label style={labelStyle}>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={inputStyle}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>Add Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentForm;
