import React, { Component } from 'react';

export default class Home extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    const url = "https"
  }

  render() {
    return <div className="home">
        {this.state.loading ? <div>Two Words</div> : <div>Words</div>} 
      </div>
  }
}