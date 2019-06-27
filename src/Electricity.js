import React, {Component} from 'react';

class Electricity extends Component{
    constructor(props) {
        super(props);
        this.state={unitsUsed: 0,
                    current: props.current,
                    electricityAmount: 0

        };
    }
    electricityUsed(e){
        this.setState({unitsUsed: e.target.value - 11000}, () => this.electricityAmount())
      
     }
     electricityAmount(e){
         console.log(this.state.unitsUsed);
         this.setState({electricityAmount: (((100 * 10) + ((this.state.unitsUsed - 100) * 20))/100) });
     }
     reset() {
        document.getElementsByTagName('input')[1].value = '';
        this.setState({ electricityAmount: 0, unitsUsed: 0, });
     } 
    render() {
        let {unitsUsed, current, electricityAmount} = this.state;
        return(

            <div className='container'>
                <div className='item'>
                    <label className='heading'>Enter the Electricity meter readings: </label>
                    <input 
                        className='border'
                        type='text'
                        placeholder = {current}
                        onChange = {(e) => this.electricityUsed(e)}
                     />
                    <label className='heading'>The Electricity unit used: </label>  
                    <label className='border'>
                        {unitsUsed}
                    </label>
                    <label className='heading'>Electricity Bill Amount:  </label>
                    <label className='border'
                        placeholder = {electricityAmount} 
                    >
                        £ {electricityAmount.toFixed(2)}
                    </label>
                <div>
                    <button onClick={() => this.reset()}>
                        RESET
                    </button>
                    </div>
                </div>
                
            </div>
        );
    }

}
export default Electricity;