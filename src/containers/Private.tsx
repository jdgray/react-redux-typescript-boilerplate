import React, { Component } from 'react';

class PrivateContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default PrivateContainer;
