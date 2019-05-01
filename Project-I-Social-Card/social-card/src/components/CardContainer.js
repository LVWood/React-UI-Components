import React from 'react';

const CardContainer = () => {
    const CardBanner = () => {
        return (
        <div className="banner-img">
            <img className="banner-img" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" alt="React banner image" />
        </div>
        )
    }

    const CardContent = () => {
        return (
        <div className="card-content">
            <a href="https://reactjs.org">
                <h4 className="lower-title">Get started with React</h4>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <p className="grey-tags">reactjs.org</p>
            </a>
        </div>
        )
        
    }

    return (
        <div className="card-container">
            <a href="https://www.reactjs.org">
                <div className="bottom-content">
                    <CardBanner />
                    <CardContent />
                </div>
            </a>
        </div>
        

    )
}

export default CardContainer;