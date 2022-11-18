import React from 'react'; 
import Navbar from '../components/Navbar';
import DisplayDATA from '../components/DisplayData';
import './Custom.css';

export default function Account() {

    let email = localStorage.getItem('userEmail'); 

    return (
        <>
            <Navbar />
            <div class="container">
                <h2>User email:</h2>
                <h2>&nbsp;{email}</h2>
            </div>
            <div class="container">
            <h3>NO DATA SAVED YET</h3>
            </div>  
            <DisplayDATA />
        </>
    )
}