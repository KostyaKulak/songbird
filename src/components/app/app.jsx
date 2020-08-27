import React from 'react';
import Header from '../header/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
