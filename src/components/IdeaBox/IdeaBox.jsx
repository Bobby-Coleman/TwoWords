import React, { Component } from 'react';

export default class IdeaBox extends Component {

    state = {
        wordOne: '',
        wordTwo: '',
        title: '',
        entry: '',
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
        wordTwo: this.props.wordTwo
      })
      this.props.handleAddEntry(this.state)
  }

  render() {
    return (
      <div className="idea-box">
        <form onSubmit={this.handleSubmit}>
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
            <button 
            className="btn"
            type="submit">
                Submit
            </button>
        </form>
      </div>
    );
  }
}