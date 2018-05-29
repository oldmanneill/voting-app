import React from 'react';
const DoneEntering = (props) => {
    if (!props.doneEntering){
        return (
            <div>
                <button
                    onClick={props.handlePick}
                    disabled = {!props.hasOptions}
                >
                    Click here when finished!
                </button>
            </div >
        )
    }
    return ('')


}
export default DoneEntering;