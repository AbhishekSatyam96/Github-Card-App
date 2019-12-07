import React, { Component } from 'react';
import "./Card.css";
export default class Card extends Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{ margin: '1rem',}}>
                <img src={profile.avatar_url} width={100} alt="Not found" />
                <div className="info" style={{ display: 'inline-block', marginLeft: '10px', }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                    <div className="company">{profile.location}</div>
                </div>
            </div>
        );
    }
}