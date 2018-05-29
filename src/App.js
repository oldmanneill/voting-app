import React, { Component } from 'react';
import './App.css';
import Header from './header';
import DoneEntering from './doneEntering';
import AddOption from './add-option';
import Options from './options';
import ListVotingItems from './listVotingItems';
import {PieChart} from 'react-easy-chart';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing four'],
            finishedEntering : false,
            votingTotals: [],
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options){//make sure options are populated...
                this.setState(()=> ({options}))
            }
        } catch (error) {}//do nothing at all...we don't want garbled data}

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    handleDeleteOptions = ()=>{
        this.setState(()=> ({options: []}))
    }

    handleDeleteOption = (optionToRemove)=>{
        this.setState((prevState)=> ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleChoice = (whichOne) =>{
        let newTotal = this.state.votingTotals
        if (!newTotal[whichOne]){
            newTotal[whichOne] = 1
        }else
            newTotal[whichOne]++;
        this.setState (()=>({
            votingTotals: newTotal,
        }))
    }

    handleAddOptions = (option)=>{
        if (this.state.options.indexOf(option)>-1){
            return 'This option already exists'
        }else if(!option){
            return 'dont be giving me those empty things!'
        }
        this.setState(()=>({options: [...this.state.options, option]}))
    }

    checkFinishedStatus = () =>{
        if (this.state.finishedEntering) {
            return (true)
        }
    }

    handleFinish = ()=>{
        this.setState(()=> ({ finishedEntering: true }))
    }
    render() {
        const title = 'Voting App';
        const subtitle = 'Choices, choices...';
        let doneEntering = this.state.finishedEntering;
        let dataBuilder = [];
        for (let i=0;i<this.state.options.length;i++){
            dataBuilder.push({key: this.state.options[i], value: this.state.votingTotals[i]})
        }
        const pieChartData = dataBuilder.filter(result => result.value > 0)//filter out the zero's


    return (
      <div>
        <header className="App-header">
            <Header title={title} subtitle={subtitle} />
        </header>
        <DoneEntering
            hasOptions = {this.state.options.length}
            handlePick = {this.handleFinish}
            doneEntering = {doneEntering}

        />
        <Options
            options={this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
            doneEntering = {doneEntering}

        />
        <AddOption
            handleAddOptions = {this.handleAddOptions}
            doneEntering = {this.checkFinishedStatus}

        />
        <ListVotingItems
            options={this.state.options}
            handleChoice = {this.handleChoice}
            doneEntering = {doneEntering}

        />
          <PieChart
              labels
              data={pieChartData}
              styles={{
                  '.chart_text': {
                      fontSize: '3em',
                      fill: '#fff'
                  }
              }}
          />

        
      </div>
    );
  }
}

export default App;
