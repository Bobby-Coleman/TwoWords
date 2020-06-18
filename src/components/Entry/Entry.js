import React from 'react'

const Entry = (props) => {
    return (
        <div className="entry">
            <div className="entry-row">
                <h4>{props.entry.wordOne}</h4>
                <h4>{props.entry.wordTwo}</h4>
                <label>{props.entry.title}</label>
                <p>{props.entry.entry}</p>
            </div>
        </div>
    )
}

export default Entry;