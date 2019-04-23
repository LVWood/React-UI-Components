import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="card-content" href="http://reactjs.org">
            <h1>Get Started with React</h1>
            <p>React makes it painless to create interactive UIs. Design Simple views for each state in your application.</p>
            <a href="http://reactjs.org">reactjs.org</a>
        </div>
    )
};

export default CardContent;