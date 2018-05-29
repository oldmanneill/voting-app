
import React from 'react';

const ListVotingItem = (props)=>{
    return (
        <div>
            {props.indexNum+1 +". "+props.optionText}
            <button
                onClick = {() => {
                    props.handleChoice(props.indexNum)
                }}
            >
                pick
            </button>
        </div>
    )
}
export default ListVotingItem;