import React, { Component } from 'react';
import './Entry.css'
class Entry extends Component {
    

    state = {
        isEditing: null,
    }

    handleEditing = (entryId) => {
        this.setState({isEditing: entryId})
    }

    render() {

        let entry;

        if (this.state.isEditing === this.props.entry._id) {
            entry = <div>editing!</div>
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