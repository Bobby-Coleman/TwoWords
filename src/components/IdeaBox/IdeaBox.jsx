import React, { Component } from 'react';

export default class IdeaBox extends Component {

    state= {
        entryData: {
            title: '',
            entry: '',
        }
    }

    handleChange = e => {
        const entryData = {...this.state.entryData, [e.target.name]: e.target.value}
        this.setState(entryData)
    }

  render() {
    return (
      <div className="idea-box">
        <form>
            <div className="entry-group">
                <label>Idea Title</label>
                <input 
                className='entry-line'
                name='title'
                type='text'
                value={this.state.entryData.title}
                onChange={this.handleChange}
                required
                >
                </input>
            </div>
        </form>
      </div>
    );
  }
}