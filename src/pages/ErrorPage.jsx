// src/pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Return to homepage</Link>
        </div>
    );
}

export default ErrorPage;