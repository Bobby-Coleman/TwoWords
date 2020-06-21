import React from 'react'
import Entry from '../../components/Entry/Entry';

const Notebook = (props) => {

    
    if(props.entries.length) {
        return (
            <div>
                {props.entries.slice(0).reverse().map(entry =>
                 <Entry 
                 entry={entry}
                 handleDeleteEntry={props.handleDeleteEntry}
                 key={entry._id}
                 handleUpdateEntry={props.handleUpdateEntry}
                 />
                )}
            </div>
        )
    } else {
        return (
            <p className="word">Your Notebook is Empty</p>
        )
    }
}

export default Notebook;
