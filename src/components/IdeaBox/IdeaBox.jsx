import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IdeaBox extends Component {

    state = {
        wordOne: '',
        wordTwo: '',
        title: '',
        entry: '',
        didSubmit: false,
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
      e.preventDefault()
      this.setState({
        wordOne: this.props.wordOne,
        wordTwo: this.props.wordTwo,
        didSubmit: true,
      })
      this.props.handleAddEntry(this.state)
  }

  render() {

    let isLoggedIn = this.props.user;
    let AuthButton;

    let didSubmit;

    if (this.state.didSubmit) {
      didSubmit = <div>Good idea!</div>
    } else {
      didSubmit = <form onSubmit={this.handleSubmit}>
      <div className="entry-group">
          <label>Title</label>
          <input 
          className='entry-line'
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          required
          >
          </input>
      </div>
      <div className="entry-group">
          <label>Entry</label>
          <textarea
          className='entry-line'
          name='entry'
          type='text'
          value={this.state.entry}
          onChange={this.handleChange}
          required
          rows="10" cols="40"
          >
          </textarea>
      </div>
  </form>
    }

    if (isLoggedIn) {
      AuthButton = <button 
      className="btn"
      type="submit">
          Submit
      </button>
    } else {
      AuthButton = 
      <>
        <label>Want to save an idea?</label>
        <Link to="/login" className="btn">LOGIN</Link>
      </>
    }

    return (
      <div className="idea-box">
        {didSubmit}
        {AuthButton}
      </div>
    );
  }
}