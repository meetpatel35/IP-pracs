import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import PatientList from './components/PatientList';
import Home from './components/Home';

function App() {
    const [patients, setPatients] = useState([]);

    const addPatient = (patient) => {
        setPatients([...patients, patient]);
    };

    const containerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
    };

    const titleStyle = {
        color: '#333',
        textAlign: 'center',
    };

    return (
        <Router>
            <div style={containerStyle}>
                <Header />
                
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/appointments" element ={<AppointmentForm addPatient={addPatient}/>} />
                    <Route path="/patients" element={<PatientList patients={patients} />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
