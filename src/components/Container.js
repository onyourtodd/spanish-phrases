import React from 'react';

const Container = ({ children, color }) => {
    return (
        <div 
            style={{
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                maxWidth: '900px' 
            }}
        >   
            {children}
        </div>
    )
}

export default Container;