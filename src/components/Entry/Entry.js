import React, { Component } from 'react';
import './Entry.css'
class Entry extends Component {
    
    render() {
        return (

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
                    </div>
                </div>
            </div>
          )
    }
}

export default Entry;