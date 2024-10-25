import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'; // Importation de Main au lieu de App
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);