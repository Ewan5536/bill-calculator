import React, { Component } from 'react';

class Gas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitsUsed: 0,
            currentUnit: props.currentUnit,
            gasAmount: 0

        };
    }
    unitUsed(e) {
        this.setState({ unitsUsed: e.target.value - 11000 }, () => this.gasAmount())

    }
    gasAmount(e) {
        console.log(this.state.unitsUsed);
        this.setState({ gasAmount: (((100 * 10) + ((this.state.unitsUsed - 100) * 20)) / 100) });
    }
    reset() {
        document.getElementsByTagName('input')[0].value = '';
        this.setState({ gasAmount: 0, unitsUsed: 0, currentUnit: '0'});
     } 
    render() {
        let { unitsUsed, currentUnit, gasAmount } = this.state;
        return (

            <div className='container'>
                <div className='item'>

                    <label className='heading'>Enter the Gas meter readings: </label>
                    <input
                        type='text' className='border'
                        placeholder={currentUnit}
                        onChange={(e) => this.unitUsed(e)}
                    />

                    <label className='heading'>The Gas unit used: </label>
                    <label className='border'>
                        {unitsUsed}
                    </label>

                    <label className='heading'>Gas Bill Amount:  </label>
                    <label className='border'
                        placeholder={gasAmount}
                    >
                        £{gasAmount.toFixed(2)}
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
export default Gas;