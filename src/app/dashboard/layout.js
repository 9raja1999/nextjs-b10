import React from 'react'

function layout({ children }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}
        >
            <div>
                Siderbar
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout