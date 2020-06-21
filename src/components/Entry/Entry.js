import React, { Component } from 'react';
import './Entry.css'
class Entry extends Component {
    

    state = {
        isEditing: null,
        entry: this.props.entry.entry,
        title: this.props.entry.title,
    }

    handleEditing = (entryId) => {
        this.setState({isEditing: entryId})
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        let entry;

        if (this.state.isEditing === this.props.entry._id) {
            entry =    
        <form>
            <div className="entry-container">
                <div className="entry">
                    <div className="entry-words">
                        <h4 className="entry-word">{this.props.entry.wordOne}</h4>
                        <h4 className="entry-word">{this.props.entry.wordTwo}</h4>
                    </div>          
                    <div>
                        <label>Title:</label>
                        <input
                            className='entry-line'
                            placeholder="Think of a title"
                            name='title'
                            type='text'
                            value={this.state.title}
                            onChange={this.handleChange}
                            required>
                        </input>
                            <div className="entry-group">
                        <label>Idea</label>
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
                    </div>
                </div>
            </div>
        </form>   
        } else {
            entry =      
        <div className="entry-container">
            <div className="entry">
                <div className="entry-words">
                    <h4 className="entry-word">{this.props.entry.wordOne}</h4>
                    <h4 className="entry-word">{this.props.entry.wordTwo}</h4>
                </div>
                <div>
                    <label>Title:</label>
                    <label>{this.props.entry.title}</label>
                    <label>Idea:</label>
                    <p>{this.props.entry.entry}</p>
                    <button onClick={() => this.props.handleDeleteEntry(this.props.entry._id)}>Delete</button>
                    <button onClick={() => this.handleEditing(this.props.entry._id)}>Edit</button>
                </div>
            </div>
        </div>
        }
        return (
            [entry]
          )
    }
}

export default Entry;