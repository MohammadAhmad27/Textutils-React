import React from 'react'

function Alert({ alert }) {
    const capitlize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt().toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitlize(alert.type)}</strong>: {alert.msg}
            </div>}
        </div>
    )
}

export default Alert;