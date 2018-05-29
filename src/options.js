import React from 'react';
import Option from './options/option';

const Options = (props) =>{
    if (props.options.length === 0){
        return (<div>Enter some bizz first, chump!</div>)

    }else if (!props.doneEntering){
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>remove all</button>
                {props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}

                    />)}
            </div>
        )
    }
    return ('')


}
export default Options;