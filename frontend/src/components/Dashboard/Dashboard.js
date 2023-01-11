import React from 'react'
import "./dashboard.css"

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"))
    return (
    <div className='dashboard'>
        <h1>Dashboard</h1>
        {user && <div className="user">
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>}

    </div>
    )
}

export default Dashboard