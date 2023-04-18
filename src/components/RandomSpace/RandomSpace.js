import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../sfpopos-data.json'

import React from 'react';

function RandomSpace() {
    const navigate = useNavigate();

    return (
        <button
            className="RandomSpace"
            onClick={(e) => {
                const id = Math.floor(Math.random() * data.length);
                navigate(`/details/${id}`);
            }}
            aria-label="Pick a random space"
        >
            Pick a random space
        </button>
    );
}


export default RandomSpace