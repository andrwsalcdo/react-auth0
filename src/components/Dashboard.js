import React from 'react'
import { Col } from 'react-bootstrap'

const style = {
    'height': '100px', 
    'width': '100px'
}

const Dashboard = ({ profile }) => (
    <div>
        <Col xs={12} sm={9} md={9}>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
        </Col>
        <Col xs={12} sm={3} md={3}>
            <img style={style}
                src={profile.picture} 
                alt="profile"/>
            <h3>{profile.name}</h3>
            <strong>{profile.email}</strong>
        </Col>
    </div>
)

export default Dashboard

