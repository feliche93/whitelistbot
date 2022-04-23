import React from 'react'

function LoadingSpinner(props) {
    const { size } = props;
    return (
        <div className={`flex mx-auto justify-center items-center`}>
            <div className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-blue-600`}></div>
        </div>
    )
}

export default LoadingSpinner
