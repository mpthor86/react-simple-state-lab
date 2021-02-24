import React from 'react';

class Cell extends React.Component{
    state = {color: this.props.value}

    changeState = () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        return ( 
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeState}></div>
        )
    }
}

export default Cell;