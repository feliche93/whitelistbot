import React from 'react'

function AppContent(props) {
    return (
        <main className="relative bg-gray-50 overflow-hidden min-h-screen">
            {props.children}
        </main>
    )
}

export default AppContent
