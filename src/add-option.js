import React, { Component } from 'react';

class AddOption extends Component {
    constructor (props){
        super(props);
        this.state= {
            error: undefined
        }
    }
    handleAddOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOptions(option)
        this.setState(() => ({error})) //this means error : error
        if (!error){
            event.target.elements.option.value = ''
        }
    }
    render() {
        if (!this.props.doneEntering()){
            return (
                <div>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.handleAddOption}>
                        <input type='text' name='option' />
                        <button>Add Option</button>
                    </form>
                </div>
            )
        }
        return ('')


    }
}
export default AddOption;