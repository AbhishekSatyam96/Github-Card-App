import React, { Component } from 'react';
import CardList from "./CardList";
import Form from "./Form";
import "./App.css";

export default class App extends Component {
  state = {
    profiles: []
  };
  addNewProfile = (profileData) => {
    console.log('App', profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div className='AppDiv'>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
        <footer style={{ textAlign: 'center', marginTop: '25px' }}>
          &copy; <strong>Created by <a href="https://www.linkedin.com/in/abhishek-satyam/">Abhishek Satyam</a></strong></footer>
      </div>
    );
  }
}