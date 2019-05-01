import React from 'react'
import moment from 'moment'

const HeaderContainer = () => {
    const ImageThumbnail = () => {
        return (
        <div className="logo">
            <img className="logo" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt=""/>
        </div>
        )
    }
    
    const NewDate = () => moment().format("D MMM");
    

    const HeaderTitle = () => {
        return (
        <div className="header-title">
            <h3>Lambda School <br/></h3> 
            <p className="grey-tags"> @LambdaSchool . <br/></p> 
            <div className="grey-tags">
                <NewDate />
            </div>
        </div>
        )
        
    }
        
    const HeaderContent = () => {
        return <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    }

    return (
        <div className="card-header">
            <ImageThumbnail className="logo-img" />
            <div className="header-content">
                <HeaderTitle />
                <HeaderContent />
            </div>    
        </div>
    )
}

export default HeaderContainer;