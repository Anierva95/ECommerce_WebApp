// src/contexts/auth0-context.js

import React, { Component, createContext } from 'react';

// create the context
export const Auth0Context = createContext();

// create a provider
export class Auth0Provider extends Component {
  state = { message: 'Anthony auth0 test' };

  render() {
    const { message } = this.state;
    const { children } = this.props;

    const configObject = { message };

    return (
      <Auth0Context.Provider value={configObject}>
        {children}
      </Auth0Context.Provider>
    );
  }
}