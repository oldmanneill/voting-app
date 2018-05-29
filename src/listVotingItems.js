import React from 'react';
import ListVotingItem from './listVotingItems/listVotingItem';

const ListVotingItems = (props) => {
    if (props.doneEntering){
        return (
            <div>
                Your Choices:
                <div>
                    {props.options.map((option,index) =>
                        <ListVotingItem
                            key={option}
                            optionText={option}
                            handleChoice = {props.handleChoice}
                            indexNum = {index}

                        />)}
                </div>
            </div >
        )
    }
    return ('')


}
export default ListVotingItems;