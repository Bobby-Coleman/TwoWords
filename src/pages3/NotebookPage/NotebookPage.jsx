import React from 'react'
import Entry from '../../components/Entry/Entry';

const Notebook = (props) => {
    
    if(props.entries.length) {
        return (
            <div>
                {props.entries.map(entry =>
                 <Entry 
                 entry={entry}
                 />
                )}
            </div>
        )
    } else {
        return (
            <p>Your Notebook is Empty</p>
        )
    }
}

export default Notebook;