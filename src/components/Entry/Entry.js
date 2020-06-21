import React from 'react'
import { Link } from 'react-router-dom'
import './Entry.css'

const Entry = ({entry, handleDeleteEntry}) => {
    return (
        <div className="entry-container">
            <div className="entry">
                <div className="entry-words">
                    <h4 className="entry-word">{entry.wordOne}</h4>
                    <h4 className="entry-word">{entry.wordTwo}</h4>
                </div>
                <div>
                    <label>Title:</label>
                    <label>{entry.title}</label>
                    <label>Idea:</label>
                    <p>{entry.entry}</p>
                    <button onClick={() => handleDeleteEntry(entry._id)}>Delete</button>
                    <Link 
                        to={{ pathname: '/edit', state: {entry} }}>
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Entry;