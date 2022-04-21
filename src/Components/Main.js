import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
        <div>
          <h1>Hello world</h1>

          <p> MY name is maciej and i would like to greet You!</p>
          <form>
            <input onClick={console.log('Heck no!')}></input>
            <button>Subscribe</button>
          </form>
        </div>
    );
  }
}
