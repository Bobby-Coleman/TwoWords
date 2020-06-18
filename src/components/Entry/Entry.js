import React from 'react'
import './Entry.css'

const Entry = (props) => {
    return (
        <div className="entry-container">
            <div className="entry">
                <div className="entry-words">
                    <h4 className="entry-word">{props.entry.wordOne}</h4>
                    <h4 className="entry-word">{props.entry.wordTwo}</h4>
                </div>
                <div>
                    <label>Title:</label>
                    <label>{props.entry.title}</label>
                    <label>Idea:</label>
                    <p>{props.entry.entry}</p>
                </div>
            </div>
        </div>
    )
}

export default Entry;