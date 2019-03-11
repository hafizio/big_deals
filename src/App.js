import React, { Component } from 'react';
import zoid from 'zoid';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    window.MyLoginZoidComponent = zoid.create({
      tag: 'big-deals-component',
      url: 'http://lvh.me:3001',
    });

    console.log(window.xprops)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <b>Member Url: {window.xprops.memberUrl}</b>
          <b>Internal Redirect Path: {window.xprops.internalRedirectPath}</b>
          <b>External Redirect URL: {window.xprops.externalRedirectUrl}</b>
          <button onClick={() => window.xprops.onLogin(window.xprops.internalRedirectPath, `http://lvh.me:3001/payment/${Date.now().toString()}`) }>Log In</button>
          <button onClick={() => window.xprops.onSignUp(window.xprops.internalRedirectPath, `http://lvh.me:3001/payment/${Date.now().toString()}`) }>Sign Up</button>
        </header>
      </div>
    );
  }
}

export default App;
