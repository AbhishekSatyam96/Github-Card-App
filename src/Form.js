import React, { Component } from 'react';
//import { axios } from 'axios';
import Card from "./Card";

export default class Form extends Component {

    state = {
        userName: '',
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.userName);
        const resp = await fetch(`https://api.github.com/users/${this.state.userName}`)
        const data = await resp.json();
        console.log(data.html_url);
        const pass = data.html_url;
        this.props.onSubmit(data);
        this.setState({ userName: '' });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="Any valid github username here..." value={this.state.userName}
                        onChange={event => this.setState({ userName: event.target.value })} required
                        style={{ width: '300px', border: 'solid 3px blue', marginTop: '20px' }} />
                    <button type="button" className="btn btn-primary" style={{ margin: '10px' }}>Add Card</button>
                </form>
                
            </div>
        );
    }
}