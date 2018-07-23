import React from 'react';
// Define you cass component to be used in your app.js
class Countdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentValue: props.initialValue
        };

        setInterval(this._decreaseValue, 1000);
    }

    _decreaseValue= () => {
        let newCurrentValue = this.state.currentValue - 1;

        this.setState({
            currentValue: newCurrentValue
        });
    }

    _reportMyId = (event) => {
        // "event" is a "Synthetic Event"
        console.log(event);
        this.props.doClick(this.props.id);
      }







render() {
    return(
        <div className='counter' onClick={(event) =>{
            this.props.doClick(this.props.id);
        }}>
        {this.state.currentValue}
        </div>
    )
}

};
export default Countdown;
